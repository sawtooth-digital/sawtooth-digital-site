<template>
    <main>
        <Hero :hero="pageInfo.services" class="hero--subpage"/>
        <PageIntro :intro="pageInfo.services"/>
        <ServiceCell1 v-for="(service, index) in services" :key="index" :service="service" :subservices="subservices" :header="service.services_section_header" :headerSub="service.services_sub_header" :headerPara="service.services_header_para"/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import ServiceCell1 from '~/components/services/ServiceCell1.vue';

export default {
    components: {
        Hero,
        PageIntro,
        ServiceCell1
    },
    transition: 'bounce',
    computed: {
        pageInfo: function () {
            return this.$store.state.pages
        },
        services: function () {
            return this.$store.state.services
        },
        subservices: function () {
            return this.$store.state.subservices
        }
    },
    // mounted() {
    //     this.$nextTick(() => {
    //         this.$nuxt.$loading.start();
    //         setTimeout(() => {
    //             this.$nuxt.$loading.finish();
    //         }, 3000);
    //     });
    // }
}
</script>

<style>

</style>
