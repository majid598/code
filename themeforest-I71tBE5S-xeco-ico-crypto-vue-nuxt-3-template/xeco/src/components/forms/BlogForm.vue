<template>
   <div className="comment-respond">
      <h3 className="comment-reply-title">Leave a Reply</h3>
      <Form ref="form" @submit="submitData" :validation-schema="schema" v-slot="{ errors }" className="comment-form">
         <p className="comment-notes">Your email address will not be published. Required fields are marked *</p>
         <div className="row">
            <div className="col-md-6">
               <div className="form-grp">
                  <label htmlFor="name">Name</label>
                  <Field name="name" type="text" v-model="formData.name" id="name" />
                  <p class="form_error">{{ errors.name }}</p>
               </div>
            </div>
            <div className="col-md-6">
               <div className="form-grp">
                  <label htmlFor="email">Email</label>
                  <Field name="email" type="email" v-model="formData.email" id="email" />
                  <p class="form_error">{{ errors.email }}</p>
               </div>
            </div>
         </div>
         <div className="form-grp">
            <label htmlFor="website">Website</label>
            <Field type="url" name="web" v-model="formData.web" id="website" />
            <p class="form_error">{{ errors.web }}</p>
         </div>
         <div className="form-grp">
            <label htmlFor="message">Message</label>
            <Field as="textarea" name="message" v-model="formData.message" id="message"
               placeholder="Simultaneously we had a problem"></Field>
            <p class="form_error">{{ errors.message }}</p>
         </div>
         <div className="form-grp checkbox-grp">
            <input type="checkbox" className="form-check-input" id="checkbox" />
            <label htmlFor="checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
         </div>
         <button type="submit" className="btn">Submit Now</button>
      </Form>
   </div>
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
            message: '',
            web:''
         },
         schema: yup.object().shape({
            name: yup.string().required('Name is required'),
            email: yup.string().required('Email is required').email('Invalid email address'),
            message: yup.string().required('Message is required'),
            web: yup.string().required('website is required'),
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