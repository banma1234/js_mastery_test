## 캐러셀

매우 간단하다.

- 이미지를 가로로 길게 늘어뜨린 후 뷰에서 `overflow: hidden` 옵션을 줘 튀어나오는 부분을 숨긴다.
- 전역변수 count만큼 `translate: transformX()`을 이용해 count \* 이미지 가로크기 만큼 이미지를 민다.
- `setInterval`을 이용해 2초마다 count를 1씩 증가시키는걸 반복, overflow 발생시 값을 0으로 초기화.
- 버튼을 이용해 수동으로 count를 조정할 수 있게끔 한다.
