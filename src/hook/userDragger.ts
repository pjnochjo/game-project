import React, { useEffect, useRef } from "react";

function useDragger(id: string): void {
  const listId = ["manh1", "manh2", "manh3", "manh4", "manh5", "manh6",];
  const isClicked = useRef<boolean>(false);
  const coords = useRef<{
    startX: number,
    startY: number,
    lastX: number,
    lastY: number
  }>({
    startX: 0,
    startY: 0,
    lastX: 0,
    lastY: 0
  })

  useEffect(() => {
    const target = document.getElementById(id);
    if (!target) throw new Error("Element with given id doesn't exist");

    const container = target.parentElement;
    if (!container) throw new Error("target element must have a parent");
    const onMouseDown = (e: MouseEvent) => {
      console.log(id);
      listId.map(s => {
        if (s !== id) {
          var item = document.getElementById(s)?.style.position;
          item = "relative";
        }
      });
      isClicked.current = true;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
      coords.current.lastX = e.clientX - 30;
      coords.current.lastY = e.clientY - 30;

    }

    const onMouseUp = (e: MouseEvent) => {
      listId.map(s => {
        var item = document.getElementById(s)?.style.position;
        item = "absolute";
      });
      isClicked.current = false;
      coords.current.startX = e.clientX;
      coords.current.startY = e.clientY;
     }

    const onMouseMove = (e: MouseEvent) => {
      if (!isClicked.current) return;

      const nextX = e.clientX - coords.current.startX + coords.current.lastX;
      const nextY = e.clientY - coords.current.startY + coords.current.lastY;
      target.style.top = `${nextY}px`;
      target.style.left = `${nextX}px`;
    }

    target.addEventListener('mousedown', onMouseDown);
    target.addEventListener('mouseup', onMouseUp);
    container.addEventListener('mousemove', onMouseMove);
    container.addEventListener('mouseleave', onMouseUp);
    const cleanup = () => {
      target.removeEventListener('mousedown', onMouseDown);
      target.removeEventListener('mouseup', onMouseUp);
      container.removeEventListener('mousemove', onMouseMove);
      container.removeEventListener('mouseleave', onMouseUp);
    }
    return cleanup;

  }, [id])

}

export default useDragger;
