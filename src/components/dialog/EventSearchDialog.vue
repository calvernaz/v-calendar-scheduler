<template>
    <transition name="zoom-out">
        <div class="modal" v-bind:class="{ 'is-active': isActive }">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">{{ title }}</p>
                    <button class="delete" aria-label="close" @click="close"></button>
                </header>
                <section class="modal-card-body">
                    <!-- Search input -->
                    <nav class="panel">
                        <div class="control has-icons-left has-icons-right">
                            <input class="input is-medium" type="email" placeholder="Search for menu">
                            <span class="icon is-left">
                            <font-awesome-icon icon="search"/>
                                <!--<i class="fas fa-envelope"></i>-->
                                </span>
                            <span class="icon is-right">
                                    <i class="fas fa-check"></i>
                                </span>
                        </div>
                        <div class="listWrap">
                            <virtual-list :size="40" :remain="8" class="list">
                                <item v-for="(item, index) of menuItems" :menuItem="item" :key="index"
                                      class="menu-item" v-on:menuSelected="isMenuActive = true"/>
                            </virtual-list>
                        </div>
                        <!--<li v-for="(menuItem, index) in menuItems" :key="index" class="panel-block menu-item"-->
                        <!--:class="{ 'is-active': isMenuActive }">-->
                        <!--</li>-->
                    </nav>
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success" :disabled="!isMenuActive">Save changes</button>
                    <button class="button" @click="cancel">Cancel</button>
                </footer>
            </div>
        </div>
    </transition>
</template>
<script>
    import "../../../node_modules/bulma/bulma.sass"

    import Item from './MenuItem'
    import VirtualList from 'vue-virtual-scroll-list'

    export default {
        components: {Item, VirtualList},
        props: {
            title: String,
            inputClass: String,
            overrideInputClass: Boolean,
            fields: Array,
            createButtonLabel: String,
            menuItems: Array
        },
        methods: {
            cancel() {
                this.close()
            },
            close() {
                this.isActive = false
                setTimeout(() => {
                    this.$destroy()
                    this.$el.remove()
                }, 150)
            }
        },
        data() {
            return {
                isActive: true,
                isMenuActive: false
            }
        },
        beforeMount() {
            //  Insert the Dialog component in body tag
            document.body.appendChild(this.$el);
        }
    }
</script>
<style scoped>
    .modal-card {
        width: 480px;
    }

    .zoom-out-enter-active,
    .zoom-out-leave-active {
        transition: opacity 150ms ease-out;
    }

    .zoom-out-enter-active .animation-content,
    .zoom-out-enter-active .animation-content,
    .zoom-out-leave-active .animation-content,
    .zoom-out-leave-active .animation-content {
        transition: transform 150ms ease-out;
    }

    .zoom-out-enter,
    .zoom-out-leave-active {
        opacity: 0;
    }

    .zoom-out-enter .animation-content,
    .zoom-out-enter .animation-content,
    .zoom-out-leave-active .animation-content,
    .zoom-out-leave-active .animation-content {
        transform: scale(1.05);
    }

    /*.panel-list {*/
        /*margin-top: 0.8em;*/
    /*}*/

    .menu-item {
        height: 4em;
        padding-left: 0.6em;
    }

    .menu-item:first-child {
        padding-top: 1rem;
    }

    .menu-item:last-child {
        margin-bottom: 1rem;
    }

    .listWrap {
        margin-top: 0.5em;
        position: relative;
    }

    .list {
        background: #fff;
        border-radius: 3px;
        border: 1px solid #ddd;
        -webkit-overflow-scrolling: touch;
        overflow-scrolling: touch;
    }
</style>