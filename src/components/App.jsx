import { useState } from 'react';
// import { useEffect } from 'react';
import { LangSwitcher } from './LangSwitcher/LangSwitcher';
import { LoginForm } from './LoginForm/LoginForm';
import { SearchBar } from './SearchBar/SearchBar';
import { Radio } from './Radio/Radio';
// import { ClickCounter } from './ClickCounter/ClickCounter';
// import { CustomButton } from './CustomButton/CustomButton';
// import { UseStateButton } from './UseStateButton/UseStateButton';
// import { Modal } from './Modal/Modal';

export const App = () => {
  // Колбек-функція для обробки сабміту форми
  const handleLogin = userData => {
    // Виконуємо необхідні операції з даними
    console.log(userData);
  };

  const [lang, setLang] = useState('uk');

  const [coffeeSize, setCoffeeSize] = useState('sm');

  return (
    <div>
      <h1>Please login to your account!</h1>
      {/* Передаємо колбек як пропс форми */}
      <LoginForm onSubmit={handleLogin} />
      <SearchBar />
      <p>Selected language: {lang}</p>
      <LangSwitcher value={lang} onSelect={setLang} />
      <Radio coffeeSize={coffeeSize} setCoffeeSize={setCoffeeSize} />
    </div>
  );
};

// *************ПОДІЇ**********

// export const App = () => {
//   const [clicks, setClicks] = useState(0);

//   // Функція, яку будемо передавати в ClickCounter
//   // для виклику під час кліку
//   const handleClick = () => {
//     setClicks(clicks + 1);
//   };

//   // useEffect(() => {
//   //   document.title = `You clicked ${clicks} times`;
//   // });

//   useEffect(() => {
//     console.log('You can see me only once!');
//   }, []);

//   // useEffect(() => {
//   //   setInterval(() => {
//   //     console.log(`Interval - ${Date.now()}`);
//   //   }, 2000);
//   // }, []);

//   const [values, setValues] = useState({
//     x: 0,
//     y: 0,
//   });

//   const updateX = () => {
//     setValues({
//       ...values,
//       x: values.x + 1,
//     });
//   };

//   const updateY = () => {
//     setValues({
//       ...values,
//       y: values.y + 1,
//     });
//   };

//   const [isOpen, setIsOpen] = useState(false);

//   // ✅ Залежності вказані правильно
//   useEffect(() => {
//     console.log('Clicks updated: ', clicks);
//   }, [clicks]);

//   return (
//     <>
//       <CustomButton message="Playing music!">Play some music</CustomButton>
//       <CustomButton message="Uploading your data!">Upload data</CustomButton>
//       <UseStateButton />
//       <ClickCounter value={clicks} onUpdate={handleClick} />
//       <ClickCounter value={clicks} onUpdate={handleClick} />

//       <div>
//         <p>
//           x: {values.x}, y: {values.y}
//         </p>

//         <button onClick={updateX}>Update x</button>
//         <button onClick={updateY}>Update y</button>
//       </div>

//       <div>
//         <button onClick={() => setIsOpen(!isOpen)}>
//           {isOpen ? 'Close' : 'Open'}
//         </button>
//         {isOpen && <Modal />}
//       </div>

//       <button onClick={() => setClicks(clicks + 1)}>
//         You clicked {clicks} times
//       </button>
//     </>
//   );
// };
