import adapter from '@sveltejs/adapter-auto';
import { sveltePreprocess } from 'svelte-preprocess';

const config = {
    kit: {
        adapter: adapter(),
        // La configuración del adaptador y otras configuraciones específicas de kit van aquí.
    },
    preprocess: sveltePreprocess(),
    // La configuración de preprocesamiento va fuera del objeto kit.
};

export default config;