import { onBeforeUnmount, onMounted, reactive } from "vue";

export default function () {

  const point = reactive({
    x: 0,
    y: 0,
  });

  function updateCoordinates(e: MouseEvent) {
    point.x = e.clientX;
    point.y = e.clientY;

    // pageX 与 clientX 的区别
    // pageX 是相对于整个页面的坐标，而 clientX 是相对于浏览器窗口的坐标
    // 如果页面没有滚动条，pageX 和 clientX 一样
  }

  onMounted(() => {
    window.addEventListener('click', updateCoordinates);
  });

  onBeforeUnmount(() => {
    window.removeEventListener('click', updateCoordinates);
  });

  return point;

}


