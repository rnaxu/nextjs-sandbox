import classNames from 'classnames';

type LoadingProps = {
  className?: string;
};

const Loading = ({ className }: LoadingProps) => {
  return (
    <div className={classNames(className)}>
      <p>Loading…</p>
    </div>
  );
};

export default Loading;
