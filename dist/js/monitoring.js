// 날씨예보버튼
const toggle = (el) => {
  const target = document.querySelector(el);
  (target.hasAttribute('open'))?target.close():target.show();
}
// 배경지도변경
const maptype = document.querySelectorAll('input[name="map_type"]');
const lst_cctv = document.querySelector('.lst_cctv');
const lst_facility = document.querySelector('.lst_facility');
const lst_sensor = document.querySelector('.lst_sensor');
const temp_map = document.querySelector('#temp_map');
const pipe = document.querySelector('.pipe');

const map_url = {
  manhole : '/images/temp/map-manhole.png',
  pipe : '/images/temp/map-pipe.png',
  pnm : '/images/temp/map-pnm.png',
  default : '/images/temp/map-default.png'
}
const types = (event) =>{
  const checkbox = event.target,
        type = checkbox.id,
        isChecked = checkbox.checked;
  switch (type) {
    case "map_type1":
      (isChecked)? lst_sensor.style.display = 'block' : lst_sensor.style.display = 'none';
      break;
    case "map_type2":
      if(isChecked){
        (maptype[2].checked) ? temp_map.setAttribute('src',map_url.pnm) : temp_map.setAttribute('src',map_url.manhole)
      }else{
        (maptype[2].checked) ? temp_map.setAttribute('src',map_url.pipe) : temp_map.setAttribute('src',map_url.default)
      }
      break;
    case "map_type3":
      if(isChecked){
        (maptype[1].checked) ? temp_map.setAttribute('src',map_url.pnm) : temp_map.setAttribute('src',map_url.pipe)
        pipe.style.display='block'
      }else{
        (maptype[1].checked) ? temp_map.setAttribute('src',map_url.manhole) : temp_map.setAttribute('src',map_url.default)
        pipe.style.display='none'
      }
      break;
    case "map_type4":
      (isChecked)? lst_cctv.style.display = 'block' : lst_cctv.style.display = 'none';
      break;
    case "map_type5":
      (isChecked)? lst_facility.style.display = 'block' : lst_facility.style.display = 'none';
      break;
  } 
}
maptype.forEach((element) => {
  element.addEventListener("change", types, false);
});
//센서 툴팁
lst_sensor.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    const target = event.target;
    const x = target.style.getPropertyValue('--x');
    const y = target.style.getPropertyValue('--y');
    const layer = event.currentTarget.querySelector('.layer');
    layer.style.left = parseInt(x,10) + 52 + 'px';
    layer.style.top = parseInt(y,10) - 7 + 'px';
    layer.style.display = (layer.style.display === 'none' || layer.style.display === '') ? 'block' : 'none';
  }
});
//cctv 팝업
lst_cctv.addEventListener('click', function(event) {
  if (event.target.tagName === 'BUTTON') {
    const opt = 'top=10, left=10, width=852, height=525, status=no, menubar=no, toolbar=no, resizable=no, location=no';
    window.open('../html/p_cctv.html','용인시 기흥구 영덕동',opt)
  }
});
//관로 툴팁
pipe.addEventListener('click', function(event) {
  const x = event.clientX;
  const y = event.clientY;
  const loc = pipe.getBoundingClientRect();
  const layer = event.currentTarget.querySelector('.layer');
  if (event.target.tagName === 'BUTTON') {    
    layer.style.display = (layer.style.display === 'none' || layer.style.display === '') ? 'block' : 'none';
  }else{
    layer.style.left = parseInt(x,10) - loc.left + 30 + 'px';
    layer.style.top = parseInt(y,10) - loc.top - 20 + 'px';
    layer.style.display='block';
  }
});

