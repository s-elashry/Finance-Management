<script setup>
    
    const companyName = 'Finance Manager';
    const menuItems = [
        { id: 'dashboard', label: 'Dashboard', href: '/', icon: '🏠' },
        { id: 'transactions', label: 'Transactions', href: '/transactions', icon: '📊' },
        { id: 'accounts', label: 'Accounts', href: '/accounts', icon: '🏦' },
        { id: 'banks', label: 'Banks', href: '/banks', icon: '🏛️' },
        ];


    const route = useRoute();
    const isActive = (href) => {
        return route.path === href;
    };
</script>

<template>
    <nav class="bg-neutral-primary border-default">
        <div class="flex flex-wrap items-center justify-between max-w-screen-xl mx-auto p-4">
            <a href="/" class="flex items-center space-x-3 rtl:space-x-reverse">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-7" alt="Flowbite Logo" />
                <span class="self-center text-xl font-semibold whitespace-nowrap text-heading">{{ companyName }}</span>
            </a>
            <div class="flex items-center md:order-2 space-x-1 md:space-x-2 rtl:space-x-reverse">
                <a href="#" class="text-heading bg-neutral-primary box-border border border-transparent hover:bg-neutral-secondary-medium focus:ring-4 focus:ring-neutral-tertiary-soft font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Login</a>
                <a href="#" class="text-white bg-brand hover:bg-brand-strong box-border border border-transparent focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-3 py-2 focus:outline-none">Sign Up</a>
            </div>
            <div id="mega-menu-icons" class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
                <ul class="flex flex-col mt-4 font-medium md:flex-row md:mt-0 md:space-x-8 rtl:space-x-reverse">
                    <li v-for="item in menuItems" :key="item">
                        <router-link :to="item.href"
                            :class="[
                                'block py-2 px-3',
                                'hover:bg-neutral-secondary-soft', 
                                'md:hover:bg-transparent md:border-0',
                                'md:hover:text-fg-brand md:p-0',
                                isActive(item.href) ? 'text-fg-brand border-b border-light' : 'text-heading border-b border-light'
                                ]"
                        >{{item.icon}}{{item.label}}                 
                        </router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>