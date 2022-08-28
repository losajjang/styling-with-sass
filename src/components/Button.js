import React from 'react';
import classNames from 'classnames';
import './Button.scss';

function Button({children, size, color, outline, fullWidth, ...rest}) {
  // // join() 메소드 사용
  // return <button className={['button', size].join(' ')}>{children}</button>;

  // // 백틱 사용
  // return <button className={`button ${size}`}>{children}</button>;

  // classnames 라이브러리 사용
  return (
    <button
      className={classNames('Button', size, color, {outline, fullWidth})}
      {...rest}
    >
      {children}
    </button>
  );
}

Button.defaultProps = {
  size: 'medium',
  color: 'blue',
};

export default Button;
