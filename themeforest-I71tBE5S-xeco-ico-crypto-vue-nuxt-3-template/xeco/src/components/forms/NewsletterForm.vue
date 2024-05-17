<template>
   <Form ref="form" @submit="submitData" :validation-schema="schema" v-slot="{ errors }">
      <Field type="email" name="email" v-model="formData.email" placeholder="Info@gmail.com" />
      <p class="form_error">{{ errors.email }}</p>
      <button type="submit"><i className="fas fa-paper-plane"></i></button>
   </Form>
</template>

<script>
import { Form, Field } from 'vee-validate';
import { toast } from 'vue3-toastify';
import * as yup from 'yup';

export default {
   data() {
      return {
         formData: {
            email: '',
         },
         schema: yup.object().shape({
            email: yup.string().required('Email is required').email('Invalid email address'),
         })
      };
   },
   components: {
      Form,
      Field
   },
   methods: {
      async submitData() {
         try {

            // Show success notification
            const notify = () => toast('subcribed successfully', { position: 'top-center' });
            notify();

            // Reset the form fields and error messages
            await this.$nextTick(); // Ensure the form state is updated before resetting
            this.$refs.form.resetForm();
         } catch (error) {
            // Handle form submission errors, if any
            console.error(error);
         }
      }
   }
}
</script>