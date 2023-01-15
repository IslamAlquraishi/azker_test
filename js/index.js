// اذكار الصباح
// let azkar_M = date.Citation_morning;
// اذكار المساء
// let azkar_E = date.Citation_evening;
// أذكار بعد السلام من الصلاة المفروضة
// let azkar_after_P = date.Remembrance_after_prayer;
// تسابيح
// let azkar_tasabih = date.Praises;
// أذكار النوم
// let azkar_sleep = date.Remembrance_sleep;
// أذكار الاستيقاظ
// let azkar_waging_Up = date.Remembrance_waking;
// أدعية قرآنية
// let azkar_quran = date.Quranic_supplications;
// أدعية الأنبياء
// let azkar_al_anbia = date.Prophets_prayer;

// type = category = count = description = reference = content //

// fetch("test.json")
//   .then((response) => response.json())
//   .then((date) => {
//     {
//       // اذكار الصباح
//       let azkar_M = date.Citation_morning;
//       // اذكار المساء
//       let azkar_E = date.Citation_evening;
//       // أذكار بعد السلام من الصلاة المفروضة
//       let azkar_after_P = date.Remembrance_after_prayer;
//       // تسابيح
//       let azkar_tasabih = date.Praises;
//       // أذكار النوم
//       let azkar_sleep = date.Remembrance_sleep;
//       // أذكار الاستيقاظ
//       let azkar_waging_Up = date.Remembrance_waking;
//       // أدعية قرآنية
//       let azkar_quran = date.Quranic_supplications;
//       // أدعية الأنبياء
//       let azkar_al_anbia = date.Prophets_prayer;
//     }
//     console.log(azkar_M);

//     // let date_C_M = date.Citation_morning;
//     // let date_C_E = date.Citation_evening;
//     // let date_R_A_P = date.Remembrance_after_prayer;
//     // let date_P = date.Praises;
//     // let date_R_S = date.Remembrance_sleep;
//     // let date_R_W = date.Remembrance_waking;
//     // let date_Q_S = date.Quranic_supplications;
//     // let date_P_P = date.Prophets_prayer;

//     // for (let i = 0; i < date_C_E.length; i++) {
//     //   document.body.innerHTML += `<div class="item${i}">${date_C_E[i].count}</div>`;
//     // }
//   });

let brief_btn = document.getElementById("brief_btn");
let brief_count = document.getElementById("brief_count");
let refresh = document.getElementById("refresh");
let count = 1;
let minus_count = 1;

brief_btn.addEventListener("click", () => {
  brief_btn.innerHTML = count;
  count++;

  brief_btn.style.transform = "scale(.95)";

  setInterval(() => {
    brief_btn.style.transform = "scale(1)";
  }, 50);

  if (brief_count.innerHTML > 0) {
    brief_count.innerHTML -= minus_count;
  } else brief_count.innerHTML = 0;
  get();
});
function get() {
  navigator.vibrate([50, 100]);
}

refresh.addEventListener("click", () => {
  brief_btn.innerHTML = 0;
  brief_count.innerHTML = 3;
});
