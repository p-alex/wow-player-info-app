const VersatilityIcon = ({
  width = 65,
  height = 65,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={width}
      height={height}
      fill="#BFBFBF"
    >
      <g xmlns="http://www.w3.org/2000/svg" id="versatility">
        <path d="M57.355 42.637A27.245 27.245 0 0059.501 32c0-3.685-.724-7.262-2.146-10.637V6.756H42.794a27.168 27.168 0 00-10.683-2.172c-3.702 0-7.295.733-10.683 2.172H6.867v14.606A27.256 27.256 0 004.722 32c0 3.687.724 7.264 2.145 10.637v14.607h14.561a27.19 27.19 0 0010.683 2.173c3.701 0 7.294-.734 10.683-2.173h14.561V42.637zm-1.5-34.381v10.068a27.462 27.462 0 00-1.021-1.636c-.065-.098-.138-.19-.204-.286a27.278 27.278 0 00-1.188-1.591c-.13-.161-.26-.322-.393-.481a27.235 27.235 0 00-1.545-1.704 27.292 27.292 0 00-2.174-1.94 27.119 27.119 0 00-1.573-1.182c-.102-.071-.2-.147-.303-.217a27.755 27.755 0 00-1.642-1.031h10.043zm-47.488 0h10.042c-.562.324-1.108.67-1.643 1.032-.102.069-.199.145-.3.215-.541.376-1.066.772-1.577 1.185a27.331 27.331 0 00-2.173 1.939l-.017.018a27.115 27.115 0 00-1.919 2.164 26.908 26.908 0 00-1.19 1.593c-.066.096-.138.188-.203.285-.358.533-.7 1.077-1.021 1.636V8.256zm0 47.488V45.676c.321.56.664 1.105 1.022 1.638.064.096.135.186.2.281a27.14 27.14 0 001.581 2.072c.494.587 1.002 1.16 1.543 1.702l.002.002a27.154 27.154 0 002.173 1.94c.512.414 1.037.81 1.579 1.187.101.07.197.146.299.215.535.361 1.081.707 1.642 1.031H8.367zm13.502.062A25.834 25.834 0 018.306 42.2 25.768 25.768 0 016.222 32c0-3.538.701-6.969 2.084-10.199A25.836 25.836 0 0121.869 8.194a25.696 25.696 0 0110.242-2.111c3.553 0 6.998.71 10.242 2.111A25.838 25.838 0 0155.916 21.8 25.769 25.769 0 0158.001 32c0 3.536-.701 6.968-2.085 10.199a25.828 25.828 0 01-13.563 13.606 25.693 25.693 0 01-10.242 2.111 25.679 25.679 0 01-10.242-2.11zm33.986-.062H45.813c.562-.324 1.108-.67 1.642-1.031.103-.069.2-.146.302-.216a27.52 27.52 0 001.571-1.181c.163-.132.325-.263.484-.398a27.704 27.704 0 001.69-1.541l.035-.038a26.998 26.998 0 001.907-2.152c.412-.513.807-1.04 1.182-1.583.068-.098.141-.192.208-.292.357-.532.699-1.076 1.02-1.635v10.067z" />
        <path d="M40.128 30.517l3.792 1.018 4.647-4.652-.674-2.517-3.432 3.436-3.833-1.028-1.027-3.839 3.431-3.436-2.513-.674-4.646 4.652 1.016 3.798-2.898 2.902-6.569-6.577 1.893-1.895 4.978-2.562-7.639-.103-1.893 1.895-.721-.722-2.975 2.979.721.722-2.118 2.121-1.758.496-2.254 2.257 3.957 3.961 2.253-2.256.496-1.76-.033-.033 2.119-2.121 6.568 6.576-2.786 2.79-3.793-1.018-4.646 4.652.674 2.517 3.431-3.436 3.834 1.029 1.027 3.838-3.432 3.436 2.513.674 4.647-4.652-1.017-3.798 2.786-2.789 8.621 8.632 2.975-2.979-8.621-8.632z" />
      </g>
    </svg>
  );
};

export default VersatilityIcon;