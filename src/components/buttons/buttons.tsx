import { NavLink } from 'react-router-dom';
import { CustomButton as MovingBorderButton } from '../moving-border'; // Ensure this path points to your index.ts

const Buttons = () => {
  return (
    <div className="flex gap-4 mt-8 mx-auto">
      <NavLink
        to="/contact"
        className=''
      >
        <MovingBorderButton
          className="text-white"
          containerClassName=""
        >
          LIVE DEMO
        </MovingBorderButton>
      </NavLink>
      <a
        href="https://github.com/your-repo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MovingBorderButton
          className="text-white"
          containerClassName="bg-green-600 hover:bg-green-700"
        >
          STAR GITHUB REPO
        </MovingBorderButton>
      </a>
    </div>
  );
};

export default Buttons;
