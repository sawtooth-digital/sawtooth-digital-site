const axios = require('axios');

export const state = () => ({
    sitewide: {},
    pages: {},
    navitems: {},
    indexOffer: {},
    indexRecent: {},
    indexProcess: {},
    privacyPolicy: {},
    testes: {},
    services: {},
    subservices: {}
});


export const mutations = {
    setSitewide(state, data) {
        state.sitewide = data;
    },
    setPages(state, data) {
        for (var page in data) {
            state.pages[data[page].page_name] = data[page];
        }
    },
    setNav(state, data) {
        let newdata = {};
        for (var nav in data) {
            let keys = Object.keys(newdata);
            let navitem = data[nav];
            if (navitem.status === 'published' && navitem.sort_nav !== null) {
                if (keys.indexOf(navitem.nav_type) >= 0) {
                    newdata[navitem.nav_type].push(navitem);
                } else {
                    newdata[navitem.nav_type] = [];
                    newdata[navitem.nav_type].push(navitem);
                }
            }
        }
        for (var newer in newdata) {
            let group = newdata[newer];
            group.sort(function (a, b) {
                return a.sort_nav - b.sort_nav;
            })
        }
        state.navitems = newdata;
    },
    setIndexOffers(state, data) {
        let newdata = data.sort(function (a, b) {
            return a.offer_sort - b.offer_sort;
        });
        state.indexOffer = newdata;
    },
    setIndexRecent(state, data) {
        let newdata = data.sort(function (a, b) {
            return a.order_on_page - b.order_on_page;
        });
        state.indexRecent = newdata;
    },
    setIndexProcess(state, data) {
        let newdata = data.sort(function (a, b) {
            return a.process_sort - b.process_sort;
        });
        state.indexProcess = newdata;
    },
    setPrivacy(state, data) {
        state.privacyPolicy = data;
    },
    setTestes(state, data) {
        let newdata = data.sort(function (a, b) {
            return a.sort - b.sort;
        });
        state.testes = newdata;
    },
    setServices(state, data) {
        let newdata = data.sort(function (a, b) {
            return a.sort - b.sort;
        });
        state.services = newdata;
    },
    setSubServices(state, data) {
        let newdata = {};
        for (var t in data) {
            var dat = data[t];
            var type = data[t].sub_service_type;
            var name = data[t].sub_service_name;
            let keys = Object.keys(newdata);
            type.forEach(function (eachtype) {
                if (!keys.includes(eachtype)) {
                    newdata[eachtype] = [];
                    newdata[eachtype].push(dat);
                } else {
                    newdata[eachtype].push(dat);
                }
            });
        }
        state.subservices = newdata;
    }
}

export const getters = {
    sitewide: state => state.sitewide,
    pages: state => state.pages,
    navitems: state => state.navitems,
    indexOffer: state => state.indexOffer,
    indexRecent: state => state.indexRecent,
    indexProcess: state => state.indexProcess,
    privacyPolicy: state => state.privacyPolicy,
    testes: state => state.testes,
    services: state => state.services,
    subservices: state => state.subservices
}

export const actions = {
    async nuxtServerInit ({commit}) {
        const sitewide = await axios.get("https://www.4fuq.com/directus/public/_/items/sitewide?fields=*.*.*").then((response) => {
            commit("setSitewide", response.data.data[0]);
        });
        const pages = await axios.get("https://www.4fuq.com/directus/public/_/items/pages?fields=*.*.*").then((response) => {
            commit("setPages", response.data.data);
        });
        const navitems = await axios.get("https://www.4fuq.com/directus/public/_/items/nav_items?fields=*.*.*").then((response) => {
            commit("setNav", response.data.data);
        });
        const indexOffer = await axios.get("https://www.4fuq.com/directus/public/_/items/index_offers?fields=*.*.*").then((response) => {
            commit("setIndexOffers", response.data.data);
        });
        const indexRecent = await axios.get("https://www.4fuq.com/directus/public/_/items/index_recent?fields=*.*.*").then((response) => {
            commit("setIndexRecent", response.data.data);
        });
        const indexProcess = await axios.get("https://www.4fuq.com/directus/public/_/items/index_process?fields=*.*.*").then((response) => {
            commit("setIndexProcess", response.data.data);
        });
        const privacyPolicy = await axios.get("https://www.4fuq.com/directus/public/_/items/privacy_policy?fields=*.*.*").then((response) => {
            commit("setPrivacy", response.data.data);
        });
        const testimonials = await axios.get("https://www.4fuq.com/directus/public/_/items/testimonials?fields=*.*.*").then((response) => {
            commit("setTestes", response.data.data);
        });
        const services = await axios.get("https://www.4fuq.com/directus/public/_/items/services?fields=*.*.*").then((response) => {
            commit("setServices", response.data.data);
        });
        const subservices = await axios.get("https://www.4fuq.com/directus/public/_/items/sub_services?fields=*.*.*").then((response) => {
            commit("setSubServices", response.data.data);
        });
    }
}