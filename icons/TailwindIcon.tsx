import { IconProps } from '@/icons/GithubIcon';

export const TailwindIcon = ({ size, color, ...props }: IconProps) => {
  return (
    <svg
      {...props}
      width={size || 24}
      height={size || 24}
      stroke='#D4E8F7'
      fill='#D4E8F7'
      strokeWidth='0'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        d='M12.001 4.8q-4.8 0-6 4.8 1.8-2.4 4.2-1.8c.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12q4.8 0 6-4.8-1.8 2.4-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8m-6 7.2q-4.8 0-6 4.8 1.8-2.4 4.2-1.8c.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576q4.8 0 6-4.8-1.8 2.4-4.2 1.8c-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12'
        stroke='none'
      />
    </svg>
  );
};
