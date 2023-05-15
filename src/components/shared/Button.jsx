import classNames from 'classnames';

const Button = ({ children, className, rounded, pill, ...rest }) => {
  const classes = classNames(
    rest.className,
    `bg-brand-orange text-white font-syn border border-brand-orange px-8 py-3 hover:border hover:border-white hover:opacity-90 active:opacity-80 transition duration-200 ${className}`,
    {
      'rounded-full': pill,
      'rounded-[0.625rem]': rounded,
    }
  );
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

Button.propTypes = {
  checkVariationValue: ({ rounded, pill }) => {
    const count = Number(!!pill) + Number(!!rounded);

    if (count > 1) {
      return new Error('Only one of pill or rounded can be true!');
    }
  },
};

export default Button;
