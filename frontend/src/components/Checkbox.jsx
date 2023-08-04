import { forwardRef, useEffect, useState } from 'react';

const Checkbox = forwardRef(({ label, checked, onChange, ...props }, ref) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);

  useEffect(() => {
    onChange();
  }, [isChecked]);
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          ref={ref}
          type="checkbox"
          onChange={() => {
            setIsChecked((prev) => !prev);
          }}
          {...props}
          checked={isChecked}
          className="checkbox"
        />
        {label}
      </label>
    </div>
  );
});

export default Checkbox;
