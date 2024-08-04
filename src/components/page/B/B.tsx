import styles from './B.module.css';

type BProps = {
  message: string;
};

const B = ({ message }: BProps) => {
  return (
    <>
      <h1>Page B</h1>
      <p className={styles.message}>{message}</p>
    </>
  );
};

export default B;
