import style from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className='page'>
      <div className='container'>
        <h1 className={style.title}>
          This is your best contact book{' '}
          <span role="img" aria-label="Greeting icon">
            ❤️
          </span>
        </h1>
      </div>
    </div>
  );
}
