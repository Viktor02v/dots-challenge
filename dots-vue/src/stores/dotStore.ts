import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'

export const useDotStore = defineStore('dot', () => {
	

type Event = {
	pageY: number,
	pageX: number,
}

type Dots = {
	id: number,
	horizontal: number,
	paralel: number,
}

const dots = ref<Dots[]>([]);

const removedDots = ref<Dots[]>([]);

const nextId = ref<number>(1);

const pozitions = reactive({
	x: 0,
	y: 0,
})

const getPositions = (event: Event) => {
	let horizont = event.pageX;
	let paralel = event.pageY;
	if (!horizont || !paralel) {
		console.log("Position is not available");
		return;
	} else {
		pozitions.x = horizont;
		pozitions.y = paralel;
	}
};


const addDot = () => {
	const dot: Dots = {
		id: nextId.value,
		horizontal: pozitions.x,
		paralel: pozitions.y,
	}
	nextId.value++;
	dots.value.push(dot);
}

const removeDot = () => {
	if (dots.value.length === 0) {
		alert('There are no dots to remove');
		return;
	};
	const lastDot = dots.value.pop();
	if (lastDot) {
		removedDots.value.push(lastDot);
		if (nextId.value > 1) {
			nextId.value--;
		};
	};
};

const unDoDot = () => {
	if (removedDots.value.length === 0) {
		alert('There are no dots, you can redo');
		return;
	} else {
		const dot = removedDots.value.pop();
		if (dot) {
			dots.value.push(dot);
		};
	};
};

const crearAllDots = () => {
	if (dots.value.length === 0) {
		alert('There is no history of dots to clear');
		return;
	} else {
		alert('Dot"s history has been cleared out')
		dots.value.length = 0;
		removedDots.value.length = 0;
		nextId.value = 1;
	};
};

return { getPositions, addDot, removeDot, unDoDot, crearAllDots, dots, removedDots, nextId, pozitions }
})
