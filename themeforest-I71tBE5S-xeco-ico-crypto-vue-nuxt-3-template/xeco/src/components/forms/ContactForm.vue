<template>
   <Form ref="form" @submit="submitData" :validation-schema="schema" v-slot="{ errors }">
      <div class="row">
         <div class="col-md-6">
            <div class="form-grp">
               <Field type="text" name="name" v-model="formData.name"  placeholder="Enter your name" />
               <p class="form_error">{{ errors.name }}</p>
            </div>
         </div>
         <div class="col-md-6">
            <div class="form-grp">
               <Field type="email" name="email" v-model="formData.email"  placeholder="Enter your email" />
               <p class="form_error">{{ errors.email }}</p>
            </div>
         </div>
         <div class="col-md-6">
            <div class="form-grp">
               <Field type="text" name="number" v-model="formData.number"  placeholder="Mobile no" />
               <p class="form_error">{{ errors.number }}</p>
            </div>
         </div>
         <div class="col-md-6">
            <div class="form-grp">
               <Field type="text" name="company" v-model="formData.company"  placeholder="Company" />
               <p class="form_error">{{ errors.company }}</p>
            </div>
         </div>
      </div>
      <button type="submit" class="btn">Send Message</button>
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
            name: '',
            email: '',
            number: '',
            company: ''
         },
         schema: yup.object().shape({
            name: yup.string().required('Name is required'),
            email: yup.string().required('Email is required').email('Invalid email address'),
            number: yup.number().required('Number is required').positive('Phone Number must be Numerics').integer(),
            company: yup.string().required('Company is required'),
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
         const notify = () => toast('Message sent successfully', { position: 'top-center' });
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
