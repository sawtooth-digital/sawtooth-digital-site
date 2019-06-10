<template>
    <main>
        <Hero :hero="pageInfo.index"/>
        <!-- <PageIntro :intro="pageInfo.index"/> -->
        <Offer :status="pageInfo.index.page_section_1_status" :header="pageInfo.index.section_header_1" :para="pageInfo.index.section_para_1" :offers="indexOffer"/>
        
        <!-- <Recent :status="pageInfo.index.page_section_2_status" :header="pageInfo.index.section_header_2" :para="pageInfo.index.section_para_2" :recentWork="indexRecentWork"/> -->
        <Process :status="pageInfo.index.page_section_3_status" :header="pageInfo.index.section_header_3" :para="pageInfo.index.section_para_3" :process="indexProcess"/>
        <Local :header="'Work With Idaho Natives'" :para="'We\'ve seen Boise grow with you over the last 30 years. We understand the needs and concerns that local business owners have, and will work with you to come up with solutions that work in our region, not just online.'"/>
        <Testimonials :status="pageInfo.index.page_section_2_status" :header="pageInfo.index.section_header_2" :para="pageInfo.index.section_para_2"/>
        <ContactBox :sitewide="sitewide"/>
    </main>
</template>

<script>
import Hero from '~/components/hero/Hero.vue';
import PageIntro from '~/components/general/PageIntro.vue';
import ContactBox from '~/components/general/ContactBox.vue';
import Offer from '~/components/index/Offer.vue';
import Local from '~/components/index/Local.vue';
import Testimonials from '~/components/general/Testimonials.vue';
import Recent from '~/components/index/Recent.vue';
import Process from '~/components/index/Process.vue';

export default {
    components: {
        Hero,
        PageIntro,
        ContactBox,
        Offer,
        Local,
        Testimonials,
        Recent,
        Process
    },
    transition: 'bounce',
    computed: {
        pageInfo: function () {
            return this.$store.state.pages
        },
        indexOffer: function () {
            return this.$store.state.indexOffer
        },
        indexRecentWork: function () {
            return this.$store.state.indexRecent
        },
        indexProcess: function () {
            return this.$store.state.indexProcess
        },
        sitewide: function () {
            return this.$store.state.sitewide
        }
    },
    head () {
        return {
            title: "Sawtooth Digital | Boise Idaho Based Web Development Agency",
            meta: [
                { 
                    hid: 'description',
                    name: 'description',
                    content: "Sawtooth Digital is a Digital Web Design and Development Agency based in Boise, Idaho. Our passion is creating custom, cutting edge websites that will make you money."
                }
            ]
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