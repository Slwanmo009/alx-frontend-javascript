export default function taskBlock(trueOrFalse) {
  let task = false;
  let task2 = true;

  if (trueOrFalse) {
    let task = true; // متغير جديد داخل الكتلة الشرطية
    let task2 = false; // متغير جديد داخل الكتلة الشرطية
  }

  return [task, task2]; // القيم الخارجية لا تتأثر بالكتلة الشرطية
}
