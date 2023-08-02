import { useState } from 'react';

const Checkbox = ({ label, checked, ...props }) => {
  const defaultChecked = checked ? checked : false;
  const [isChecked, setIsChecked] = useState(defaultChecked);
  return (
    <div className="checkbox-wrapper">
      <label>
        <input
          type="checkbox"
          onChange={() => setIsChecked((prev) => !prev)}
          {...props}
          checked={isChecked}
          className="checkbox"
        />
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
