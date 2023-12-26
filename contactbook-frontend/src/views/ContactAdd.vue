<template>
    <div class="page">
        <h4>Thêm mới liên hệ</h4>
        <ContactFormAdd @submit:contact="createContact"/>
     
    </div>
</template>
<script>
import ContactFormAdd from "@/components/ContactFormAdd.vue";
import ContactService from "@/services/contact.service";
export default {
    components: {
        ContactFormAdd,
    },
    data() {
        return {
            contact: null,
            message: "",
        };
    },
    methods: {
        
        async createContact(data) {
            try {
                await ContactService.create(data);
                alert('Liên hệ được thêm thành công.');
                this.$router.push({ name: "contactbook" });
            } catch (error) {
                console.log(error);
            }
        },
       
    },
   
};
</script>
