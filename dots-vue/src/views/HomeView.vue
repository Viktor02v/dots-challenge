<script setup lang="ts">
import { useDotStore } from '@/stores/dotStore';
import {useDotEvents} from '@/composables/useDotsEvents';

const dotStore = useDotStore();

useDotEvents();
</script>

<template>
	<div class="w-full flex justify-center h-[100vh]">
		<div class="fixed flex w-full items-center justify-center gap-10 top-0 left-0">
			<button @click.stop="dotStore.removeDot" class="p-2 bg-gray-400 text-white rounded-md">
				Remove Dot
			</button>
			<button @click.stop="dotStore.unDoDot" class="p-2 bg-gray-400 text-white rounded-md">
				Undo Dot
			</button>
			<button @click.stop="dotStore.crearAllDots" class="p-2 bg-gray-400 text-white rounded-md">
				Clear All Dots
			</button>

			<router-link to="/returned-dots">
				<button @click.stop="" class="">
					To Dots
				</button>
			</router-link>

		</div>

		<div v-for="dot in dotStore.dots" :key="dot" :style="{ left: dot.horizontal + 'px', top: dot.paralel + 'px' }"
			class="absolute p-2 rounded-full bg-black">
		</div>
	</div>
</template>
