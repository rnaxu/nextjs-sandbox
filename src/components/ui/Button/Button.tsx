import classNames from 'classnames';
import styles from './Button.module.css';

type ButtonProps = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Class attribute
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  className,
  ...props
}: ButtonProps) => {
  const mode = primary ? styles['root-primary'] : styles['root-secondary'];
  return (
    <button
      type="button"
      style={{ backgroundColor }}
      className={classNames([styles.root, styles[`root-${size}`], mode, className])}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button;
