import * as React from "react"
import Svg, { SvgProps, G, Path, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const SvgComponent = (props: SvgProps) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={800}
    height={600}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Path
        fill="#fff"
        d="M228.244 393.229v9.917l34.403 13.1 1.102-.857 1.714-6.734-28.649-10.529v-.612l28.526-10.774.612-.979-2.693-6.979-34.28 13.345-.735 1.102Zm82.305-31.097c5.713.081 10.855 1.306 15.426 3.673l-2.204 10.406-.979.367c-3.837-2.775-8.122-4.162-12.856-4.162-9.712 0-14.569 6.407-14.569 19.221 0 13.794 4.979 20.732 14.937 20.813 4.897 0 9.427-1.346 13.589-4.04l1.102.612-.979 10.529a36.428 36.428 0 0 1-14.692 3.306c-8.815 0-15.548-2.571-20.201-7.713-4.57-5.142-6.856-12.57-6.856-22.282 0-9.713 2.449-17.263 7.346-22.65 4.897-5.387 11.876-8.08 20.936-8.08Zm39.376 16.405c6.529 0 11.426 1.837 14.691 5.51 3.265 3.673 4.897 9.1 4.897 16.283 0 7.182-1.795 12.773-5.386 16.773-3.51 3.918-8.489 5.876-14.937 5.876-6.366 0-11.223-1.836-14.569-5.509-3.265-3.754-4.897-9.223-4.897-16.406 0-7.182 1.755-12.732 5.264-16.65 3.51-3.918 8.489-5.877 14.937-5.877Zm-.368 8.203c-2.938 0-5.06 1.02-6.366 3.061-1.306 1.959-1.959 5.428-1.959 10.406 0 4.979.653 8.652 1.959 11.019 1.306 2.285 3.469 3.428 6.489 3.428s5.183-.938 6.489-2.816c1.306-1.877 1.958-5.305 1.958-10.284 0-4.979-.693-8.692-2.081-11.141-1.387-2.449-3.55-3.673-6.489-3.673Zm63.891 24.241c.082 1.061.245 1.796.49 2.204.245.326.735.49 1.469.49.735 0 1.592-.123 2.571-.368l.857.735-1.102 6.366c-1.958 1.225-4.203 2-6.733 2.327-3.918-.327-6.407-2.449-7.468-6.367h-.735c-2.938 2.775-5.999 4.857-9.182 6.244-6.04 0-10.693-1.877-13.957-5.632-3.265-3.836-4.898-9.264-4.898-16.283 0-7.019 1.878-12.447 5.632-16.283 3.836-3.836 9.101-5.754 15.794-5.754 1.795 0 3.754.163 5.876.49l-.122-20.569 12.12-.979-.857 45.666.245 7.713Zm-27.302-12.243c0 9.55 2.898 14.325 8.693 14.325 2.612 0 5.101-1.266 7.468-3.796l.123-5.019-.245-15.794c-2.367-1.061-4.612-1.591-6.734-1.591-6.203 0-9.305 3.958-9.305 11.875Zm47.974 3.551c.49 7.754 4.244 11.631 11.264 11.631 3.999 0 8.121-1.143 12.365-3.428l.98.734-1.592 8.938c-4.244 1.795-8.529 2.734-12.855 2.815-6.775 0-12.039-1.958-15.794-5.876-3.754-3.918-5.631-9.305-5.631-16.161 0-6.938 1.877-12.365 5.631-16.283 3.836-4 8.693-5.999 14.569-5.999 5.877 0 10.244 1.51 13.1 4.53 2.939 2.938 4.408 7.019 4.408 12.243 0 1.632-.122 3.305-.367 5.019l-1.837 1.714-24.241.123Zm9.305-15.671c-2.367 0-4.367.775-5.999 2.326-1.551 1.551-2.571 3.754-3.061 6.611l15.426-.49.245-.979c-.082-4.979-2.285-7.468-6.611-7.468ZM556.717 422h-31.954l.735-17.63-.735-41.381h12.733l-.735 40.279.245 8.448h19.834l.734.979-.857 9.305Zm12.969-63.541c1.959 0 3.468.571 4.53 1.714 1.061 1.061 1.591 2.612 1.591 4.652 0 1.959-.571 3.551-1.714 4.775-1.143 1.224-2.734 1.836-4.775 1.836-1.959 0-3.509-.53-4.652-1.591-1.061-1.143-1.592-2.694-1.592-4.653 0-1.958.613-3.55 1.837-4.774 1.224-1.306 2.816-1.959 4.775-1.959ZM575.44 422h-12.243l.612-17.63-.49-24.241 12.243-.979-.857 24.118.735 18.732Zm37.112-26.567c0-4.489-1.918-6.734-5.754-6.734-2.775 0-5.713 1.306-8.815 3.918v10.651l.612 18.732h-12.243l.612-17.63-.489-24.241 11.63-.979v6.243h.613c3.509-3.101 7.182-5.305 11.018-6.611 4.653 0 8.162 1.061 10.529 3.183 2.449 2.123 3.632 5.142 3.551 9.06l-.245 12.243.49 18.732h-12.243l.734-26.567Zm63.166-10.284c-1.632.408-3.999.857-7.101 1.346l-.245.368c.898 1.795 1.347 3.836 1.347 6.121 0 4.571-1.673 8.244-5.02 11.019-3.264 2.693-7.754 4.04-13.467 4.04-1.714 0-3.469-.163-5.264-.49-.898.898-1.347 1.714-1.347 2.449 0 1.061.694 1.836 2.081 2.326 1.469.408 3.918.816 7.346 1.224 3.428.408 6.326.939 8.692 1.592 2.367.571 4.408 1.632 6.122 3.183 1.796 1.551 2.693 3.714 2.693 6.489 0 2.857-.897 5.428-2.693 7.713-3.755 4.897-9.835 7.346-18.242 7.346-5.55 0-9.835-1.143-12.855-3.428-3.02-2.286-4.53-5.265-4.53-8.938 1.877-2.612 4.448-4.897 7.713-6.856v-.489c-4.408-1.633-6.611-4.408-6.611-8.326 1.632-1.959 3.713-3.836 6.244-5.631v-.368c-4.489-2.448-6.734-6.203-6.734-11.263 0-5.142 1.632-9.06 4.897-11.754 3.347-2.775 7.877-4.162 13.59-4.162 3.346 0 6.325.571 8.937 1.714 4.408-.816 8.897-2.041 13.468-3.673l.979.857v7.591Zm-16.528 8.08c0-4.652-2.489-6.979-7.468-6.979-4.897 0-7.346 2.367-7.346 7.101 0 4.979 2.408 7.428 7.223 7.346 5.061.082 7.591-2.408 7.591-7.468Zm2.204 33.913c0-1.714-.898-2.897-2.694-3.55-1.795-.572-3.999-1.021-6.611-1.347-2.53-.245-4.04-.449-4.53-.612-2.857 1.959-4.285 3.795-4.285 5.509 0 1.796.735 3.183 2.204 4.163 1.469.979 3.591 1.469 6.366 1.469 2.857 0 5.142-.531 6.856-1.592 1.796-.979 2.694-2.326 2.694-4.04Zm36.371-48.605c6.53 0 11.427 1.837 14.692 5.51 3.265 3.673 4.897 9.1 4.897 16.283 0 7.182-1.795 12.773-5.387 16.773-3.509 3.918-8.488 5.876-14.936 5.876-6.366 0-11.223-1.836-14.569-5.509-3.265-3.754-4.897-9.223-4.897-16.406 0-7.182 1.754-12.732 5.264-16.65 3.51-3.918 8.489-5.877 14.936-5.877Zm-.367 8.203c-2.938 0-5.06 1.02-6.366 3.061-1.306 1.959-1.959 5.428-1.959 10.406 0 4.979.653 8.652 1.959 11.019 1.306 2.285 3.469 3.428 6.489 3.428s5.182-.938 6.488-2.816c1.306-1.877 1.959-5.305 1.959-10.284 0-4.979-.693-8.692-2.081-11.141s-3.55-3.673-6.489-3.673Zm45.381 45.789h-8.448l-.735-.979 18.855-71.989h8.325l.979 1.224-18.976 71.744Zm57.801-39.3v9.917l-34.403 13.1-1.102-.857-1.714-6.734 28.649-10.529v-.612l-28.526-10.774-.612-.979 2.693-6.979 34.28 13.345.735 1.102Z"
      />
      <Path
        fill="#000"
        d="m228.244 393.229-.832-.555-.168.252v.303h1Zm0 9.917h-1v.689l.644.245.356-.934Zm34.403 13.1-.356.934.526.2.444-.345-.614-.789Zm1.102-.857.614.789.27-.21.085-.333-.969-.246Zm1.714-6.734.969.247.222-.874-.846-.312-.345.939Zm-28.649-10.529h-1v.698l.655.241.345-.939Zm0-.612-.353-.936-.647.245v.691h1Zm28.526-10.774.354.936.315-.12.179-.286-.848-.53Zm.612-.979.848.53.265-.424-.18-.466-.933.36Zm-2.693-6.979.933-.36-.361-.935-.935.363.363.932Zm-34.28 13.345-.363-.932-.294.115-.176.262.833.555Zm-1.735 1.102v9.917h2v-9.917h-2Zm.644 10.851 34.403 13.1.712-1.869-34.403-13.1-.712 1.869Zm35.373 12.955 1.102-.857-1.228-1.579-1.102.857 1.228 1.579Zm1.457-1.4 1.714-6.733-1.938-.494-1.714 6.734 1.938.493Zm1.09-7.919-28.649-10.528-.69 1.877 28.649 10.529.69-1.878Zm-27.994-9.59v-.612h-2v.612h2Zm-.647.323 28.527-10.773-.707-1.871-28.526 10.773.706 1.871Zm29.021-11.179.612-.979-1.696-1.06-.612.979 1.696 1.06Zm.697-1.869-2.693-6.979-1.866.72 2.693 6.979 1.866-.72Zm-3.989-7.551-34.28 13.345.725 1.864 34.281-13.345-.726-1.864Zm-34.75 13.722-.734 1.102 1.664 1.11.735-1.102-1.665-1.11Zm82.403-29.44.014-1h-.014v1Zm15.426 3.673.978.207.158-.745-.676-.35-.46.888Zm-2.204 10.406.351.937.514-.193.113-.537-.978-.207Zm-.979.367-.587.811.435.314.503-.188-.351-.937Zm-12.488 35.872-.008 1h.008v-1Zm13.589-4.04.486-.874-.525-.291-.504.326.543.839Zm1.102.612.996.093.061-.65-.571-.317-.486.874Zm-.979 10.529.415.91.527-.24.054-.577-.996-.093Zm-14.692 3.306v1h.016l-.016-1Zm-20.201-7.713-.747.664.006.007.741-.671Zm.49-44.932-.74-.673.74.673Zm20.921-7.08c5.576.079 10.563 1.273 14.981 3.561l.92-1.776c-4.723-2.446-10.021-3.702-15.872-3.785l-.029 2Zm14.462 2.465-2.203 10.407 1.956.414 2.204-10.406-1.957-.415Zm-1.576 9.678-.98.367.703 1.873.979-.367-.702-1.873Zm-.042.493c-4.007-2.898-8.497-4.352-13.442-4.352v2c4.524 0 8.604 1.321 12.269 3.973l1.173-1.621Zm-13.442-4.352c-5.096 0-9.066 1.695-11.723 5.201-2.618 3.454-3.846 8.515-3.846 15.02h2c0-6.309 1.201-10.858 3.44-13.812 2.199-2.901 5.513-4.409 10.129-4.409v-2Zm-15.569 20.221c0 6.988 1.256 12.417 3.922 16.132 2.708 3.774 6.769 5.638 12.007 5.681l.016-2c-4.72-.038-8.128-1.683-10.398-4.847-2.313-3.223-3.547-8.16-3.547-14.966h-2Zm15.937 21.813c5.092 0 9.81-1.403 14.133-4.2l-1.087-1.679c-4.003 2.59-8.344 3.879-13.046 3.879v2Zm13.104-4.166 1.102.613.971-1.749-1.102-.612-.971 1.748Zm.592-.354-.98 10.529 1.992.185.979-10.529-1.991-.185Zm-.399 9.712a35.423 35.423 0 0 1-14.293 3.215l.032 2a37.42 37.42 0 0 0 15.091-3.396l-.83-1.819Zm-14.277 3.215c-8.614 0-15.045-2.505-19.459-7.384l-1.483 1.342c4.89 5.405 11.927 8.042 20.942 8.042v-2Zm-19.453-7.377c-4.352-4.896-6.604-12.05-6.604-21.618h-2c0 9.857 2.319 17.558 7.109 22.946l1.495-1.328Zm-6.604-21.618c0-9.549 2.406-16.829 7.086-21.977l-1.48-1.346c-5.114 5.626-7.606 13.446-7.606 23.323h2Zm7.086-21.977c4.663-5.13 11.344-7.753 20.196-7.753v-2c-9.268 0-16.544 2.763-21.676 8.407l1.48 1.346Zm74.263 13.162.748-.665-.748.665Zm-.489 33.056-.745-.668v.001l.745.667Zm-29.506.367-.755.656.008.009.008.009.739-.674Zm.367-33.056.745.667-.745-.667Zm8.203 5.387.832.555.005-.008.005-.008-.842-.539Zm0 21.425-.876.483.004.007.004.006.868-.496Zm12.855-20.813-.87.493.87-.493Zm-6.121-10.876c6.343 0 10.926 1.779 13.944 5.174l1.495-1.329c-3.512-3.95-8.723-5.845-15.439-5.845v2Zm13.944 5.174c3.041 3.421 4.644 8.57 4.644 15.619h2c0-7.317-1.661-13.023-5.149-16.948l-1.495 1.329Zm4.644 15.619c0 7.02-1.753 12.343-5.131 16.105l1.489 1.336c3.804-4.237 5.642-10.096 5.642-17.441h-2Zm-5.131 16.106c-3.278 3.659-7.959 5.543-14.192 5.543v2c6.663 0 11.94-2.033 15.681-6.209l-1.489-1.334Zm-14.192 5.543c-6.169 0-10.723-1.772-13.83-5.182l-1.478 1.347c3.586 3.935 8.745 5.835 15.308 5.835v-2Zm-13.814-5.165c-3.049-3.506-4.652-8.703-4.652-15.75h-2c0 7.319 1.662 13.06 5.142 17.062l1.51-1.312Zm-4.652-15.75c0-7.027 1.716-12.306 5.009-15.983l-1.49-1.334c-3.725 4.159-5.519 9.979-5.519 17.317h2Zm5.009-15.983c3.278-3.659 7.958-5.544 14.192-5.544v-2c-6.663 0-11.94 2.033-15.682 6.21l1.49 1.334Zm13.824.659c-3.195 0-5.678 1.13-7.208 3.522l1.684 1.078c1.081-1.689 2.843-2.6 5.524-2.6v-2Zm-7.198 3.506c-1.484 2.226-2.127 5.962-2.127 10.961h2c0-4.958.663-8.159 1.791-9.851l-1.664-1.11Zm-2.127 10.961c0 5.028.653 8.909 2.083 11.502l1.752-.966c-1.182-2.141-1.835-5.605-1.835-10.536h-2Zm2.091 11.515c1.513 2.649 4.041 3.932 7.357 3.932v-2c-2.725 0-4.522-1.002-5.621-2.924l-1.736.992Zm7.357 3.932c3.231 0 5.759-1.016 7.309-3.245l-1.641-1.142c-1.062 1.526-2.86 2.387-5.668 2.387v2Zm7.309-3.245c1.498-2.152 2.138-5.863 2.138-10.855h-2c0 4.966-.665 8.112-1.779 9.713l1.641 1.142Zm2.138-10.855c0-5.037-.695-8.96-2.211-11.634l-1.74.986c1.26 2.223 1.951 5.728 1.951 10.648h2Zm-2.211-11.634c-1.574-2.779-4.08-4.18-7.359-4.18v2c2.598 0 4.419 1.047 5.619 3.166l1.74-.986Zm56.532 21.061-.999.032.001.023.001.022.997-.077Zm.49 2.204-.857.515.026.044.031.041.8-.6Zm4.04.122.651-.759-.392-.336-.501.125.242.97Zm.857.735.986.171.097-.56-.432-.37-.651.759Zm-1.102 6.366.53.848.379-.237.077-.44-.986-.171ZM411 422.735l-.083.996.105.009.106-.014-.128-.991Zm-7.468-6.367.965-.261-.2-.739h-.765v1Zm-.735 0v-1h-.398l-.289.273.687.727Zm-9.182 6.244v1h.208l.191-.083-.399-.917Zm-13.957-5.632-.762.648.007.009.755-.657Zm.734-32.566-.707-.707-.007.008.714.699Zm21.67-5.264-.152.988 1.159.178-.007-1.172-1 .006Zm-.122-20.569-.081-.996-.925.074.006.928 1-.006Zm12.12-.979 1 .019.021-1.105-1.101.089.08.997Zm-.857 45.666-.999-.019-.001.026.001.025.999-.032Zm-10.896 5.999.73.683.261-.278.009-.38-1-.025Zm.123-5.019.999.024.001-.02v-.02l-1 .016Zm-.245-15.794 1-.015-.01-.637-.581-.26-.409.912Zm10.266 22.604c.083 1.07.254 2.015.63 2.642l1.715-1.029c-.114-.19-.27-.714-.351-1.766l-1.994.153Zm.687 2.727c.542.723 1.461.89 2.269.89v-2c-.301 0-.492-.035-.602-.071-.103-.035-.095-.057-.067-.019l-1.6 1.2Zm2.269.89c.841 0 1.782-.14 2.814-.397l-.485-1.941c-.928.232-1.7.338-2.329.338v2Zm1.92-.608.857.734 1.302-1.518-.857-.735-1.302 1.519Zm.523-.196-1.102 6.367 1.971.341 1.102-6.366-1.971-.342Zm-.647 5.689c-1.824 1.141-3.929 1.873-6.331 2.183l.256 1.983c2.658-.343 5.042-1.161 7.135-2.47l-1.06-1.696Zm-6.12 2.178c-1.794-.149-3.184-.701-4.24-1.601-1.058-.902-1.856-2.219-2.346-4.03l-1.931.523c.571 2.106 1.548 3.809 2.98 5.029 1.434 1.223 3.246 1.895 5.371 2.072l.166-1.993Zm-7.551-6.37h-.735v2h.735v-2Zm-1.422.273c-2.868 2.709-5.833 4.72-8.895 6.054l.799 1.834c3.305-1.441 6.461-3.592 9.47-6.434l-1.374-1.454Zm-8.495 5.971c-5.818 0-10.168-1.798-13.203-5.288l-1.509 1.313c3.495 4.019 8.45 5.975 14.712 5.975v-2Zm-13.196-5.28c-3.06-3.595-4.659-8.76-4.659-15.635h-2c0 7.164 1.666 12.855 5.136 16.931l1.523-1.296Zm-4.659-15.635c0-6.841 1.826-11.986 5.347-15.584l-1.429-1.398c-3.989 4.075-5.918 9.785-5.918 16.982h2Zm5.339-15.576c3.607-3.607 8.593-5.461 15.087-5.461v-2c-6.893 0-12.435 1.981-16.501 6.047l1.414 1.414Zm15.087-5.461c1.736 0 3.643.158 5.724.478l.304-1.977c-2.163-.333-4.173-.501-6.028-.501v2Zm6.876-.516-.122-20.569-2 .012.122 20.568 2-.011Zm-1.042-19.566 12.121-.979-.161-1.994-12.121.98.161 1.993Zm11.041-1.995-.857 45.666 1.999.038.857-45.666-1.999-.038Zm-.857 45.717.245 7.713 1.999-.063-.245-7.714-1.999.064Zm-27.058-4.562c0 4.844.729 8.643 2.319 11.262 1.638 2.7 4.143 4.063 7.374 4.063v-2c-2.564 0-4.405-1.025-5.665-3.1-1.308-2.156-2.028-5.519-2.028-10.225h-2Zm9.693 15.325c2.971 0 5.707-1.449 8.198-4.113l-1.46-1.366c-2.243 2.397-4.485 3.479-6.738 3.479v2Zm8.468-4.771.122-5.02-1.999-.049-.122 5.02 1.999.049Zm.123-5.06-.245-15.793-2 .031.245 15.793 2-.031Zm-.836-16.69c-2.468-1.107-4.852-1.679-7.143-1.679v2c1.954 0 4.058.488 6.325 1.504l.818-1.825Zm-7.143-1.679c-3.329 0-5.981 1.074-7.766 3.352-1.748 2.231-2.539 5.461-2.539 9.523h2c0-3.855.76-6.562 2.114-8.29 1.317-1.681 3.318-2.585 6.191-2.585v-2Zm38.669 16.426-.005-1-1.06.005.067 1.058.998-.063Zm23.629 8.203.6-.8-.511-.384-.563.303.474.881Zm.98.734.984.175.108-.606-.492-.369-.6.8Zm-1.592 8.938.39.92.499-.211.095-.534-.984-.175Zm-12.855 2.815v1h.019l-.019-1Zm-15.794-5.876.722-.692-.722.692Zm0-32.444-.721-.692h-.001l.722.692Zm27.669-1.469-.726.687.01.01.009.01.707-.707Zm4.041 17.262.682.731.258-.24.05-.349-.99-.142Zm-1.837 1.714.005 1 .392-.002.286-.267-.683-.731Zm-20.935-13.222-.689-.725-.009.009-.009.009.707.707Zm-3.061 6.611-.986-.169-.207 1.207 1.225-.038-.032-1Zm15.426-.49.032 1 .755-.024.183-.733-.97-.243Zm.245-.979.97.242.032-.127-.002-.131-1 .016Zm-16.914 8.266c.253 4.012 1.361 7.185 3.463 9.356 2.118 2.186 5.103 3.212 8.799 3.212v-2c-3.324 0-5.726-.914-7.362-2.604-1.653-1.706-2.668-4.348-2.904-8.09l-1.996.126Zm12.262 12.568c4.195 0 8.479-1.2 12.839-3.548l-.948-1.761c-4.128 2.223-8.088 3.309-11.891 3.309v2Zm11.765-3.628.98.734 1.2-1.6-.98-.734-1.2 1.6Zm.595-.241-1.592 8.937 1.969.351 1.592-8.938-1.969-.35Zm-.997 8.192c-4.134 1.749-8.294 2.658-12.484 2.737l.038 1.999c4.461-.084 8.872-1.052 13.226-2.895l-.78-1.841Zm-12.465 2.736c-6.574 0-11.55-1.894-15.072-5.568l-1.444 1.384c3.988 4.161 9.541 6.184 16.516 6.184v-2Zm-15.072-5.568c-3.532-3.686-5.353-8.8-5.353-15.469h-2c0 7.043 1.933 12.703 5.909 16.853l1.444-1.384Zm-5.353-15.469c0-6.755 1.823-11.907 5.353-15.591l-1.444-1.384c-3.978 4.152-5.909 9.854-5.909 16.975h2Zm5.353-15.591c3.635-3.79 8.225-5.691 13.847-5.691v-2c-6.13 0-11.253 2.098-15.29 6.307l1.443 1.384Zm13.847-5.691c5.718 0 9.773 1.468 12.374 4.217l1.453-1.375c-3.113-3.29-7.791-4.842-13.827-4.842v2Zm12.393 4.237c2.706 2.705 4.115 6.505 4.115 11.536h2c0-5.417-1.529-9.779-4.7-12.95l-1.415 1.414Zm4.115 11.536c0 1.582-.119 3.208-.357 4.878l1.98.283c.251-1.758.377-3.479.377-5.161h-2Zm-.05 4.288-1.836 1.714 1.365 1.462 1.836-1.714-1.365-1.462Zm-1.159 1.445-24.241.123.01 2 24.241-.123-.01-2Zm-14.931-15.548c-2.609 0-4.86.864-6.688 2.601l1.377 1.45c1.437-1.365 3.186-2.051 5.311-2.051v-2Zm-6.706 2.619c-1.738 1.737-2.826 4.153-3.34 7.149l1.972.338c.465-2.718 1.418-4.709 2.782-6.073l-1.414-1.414Zm-2.322 8.318 15.426-.49-.064-1.999-15.426.49.064 1.999Zm16.364-1.247.245-.98-1.94-.485-.245.98 1.94.485Zm.275-1.238c-.043-2.614-.643-4.754-1.965-6.248-1.345-1.519-3.289-2.204-5.646-2.204v2c1.968 0 3.289.56 4.148 1.53.882.995 1.424 2.589 1.463 4.954l2-.032ZM556.717 422v1h.912l.084-.908-.996-.092Zm-31.954 0-.999-.042-.044 1.042h1.043v-1Zm.735-17.63.999.042.001-.03-.001-.03-.999.018Zm-.735-41.381v-1h-1.018l.018 1.017 1-.017Zm12.733 0 .999.018.019-1.018h-1.018v1Zm-.735 40.279-1-.018v.047l1-.029Zm.245 8.448-1 .029.028.971h.972v-1Zm19.834 0 .8-.6-.3-.4h-.5v1Zm.734.979.996.092.035-.384-.231-.308-.8.6Zm-.857 8.305h-31.954v2h31.954v-2Zm-30.955 1.042.735-17.63-1.999-.084-.734 17.63 1.998.084Zm.735-17.69-.734-41.381-2 .035.735 41.382 1.999-.036Zm-1.734-40.363h12.733v-2h-12.733v2Zm11.733-1.018-.735 40.279 2 .036.734-40.279-1.999-.036Zm-.735 40.326.245 8.448 2-.058-.245-8.448-2 .058Zm1.245 9.419h19.834v-2h-19.834v2Zm19.034-.4.734.979 1.6-1.2-.734-.979-1.6 1.2Zm.538.288-.857 9.304 1.992.184.857-9.305-1.992-.183Zm17.638-52.431-.733.68.012.014.013.013.708-.707Zm-.123 9.427-.731-.682.731.682Zm-9.427.245-.733.68.025.027.028.026.68-.733Zm.245-9.427.707.707.011-.012.011-.011-.729-.684ZM575.44 422v1h1.04l-.041-1.039-.999.039Zm-12.243 0-1-.035-.035 1.035h1.035v-1Zm.612-17.63.999.035.001-.028v-.027l-1 .02Zm-.49-24.241-.079-.997-.94.075.019.942 1-.02Zm12.243-.979 1 .035.039-1.122-1.118.09.079.997Zm-.857 24.118-.999-.035-.001.037.001.037.999-.039Zm-5.019-43.809c1.756 0 2.971.505 3.797 1.394l1.465-1.361c-1.296-1.396-3.101-2.033-5.262-2.033v2Zm3.822 1.421c.815.814 1.299 2.072 1.299 3.945h2c0-2.208-.576-4.051-1.884-5.359l-1.415 1.414Zm1.299 3.945c0 1.752-.504 3.085-1.445 4.093l1.462 1.364c1.345-1.44 1.983-3.291 1.983-5.457h-2Zm-1.445 4.093c-.913.978-2.215 1.518-4.044 1.518v2c2.253 0 4.134-.684 5.506-2.154l-1.462-1.364Zm-4.044 1.518c-1.774 0-3.058-.476-3.972-1.324l-1.36 1.466c1.371 1.273 3.188 1.858 5.332 1.858v-2Zm-3.919-1.272c-.849-.913-1.325-2.198-1.325-3.972h-2c0 2.144.585 3.962 1.859 5.333l1.466-1.361Zm-1.325-3.972c0-1.731.532-3.056 1.544-4.067l-1.414-1.414c-1.437 1.437-2.13 3.295-2.13 5.481h2Zm1.566-4.09c1.017-1.084 2.334-1.643 4.046-1.643v-2c-2.207 0-4.072.747-5.505 2.275l1.459 1.368Zm9.8 59.898h-12.243v2h12.243v-2Zm-11.244 1.035.612-17.63-1.998-.07-.613 17.63 1.999.07Zm.613-17.685-.49-24.241-2 .04.49 24.241 2-.04Zm-1.41-23.224 12.243-.98-.159-1.993-12.243.979.159 1.994Zm11.164-2.012-.857 24.119 1.999.071.857-24.119-1.999-.071Zm-.857 24.193.735 18.732 1.998-.078-.735-18.732-1.998.078Zm38.846-7.874 1 .027v-.027h-1Zm-14.569-2.816-.644-.765-.356.3v.465h1Zm0 10.651h-1v.033l1-.033Zm.612 18.732v1h1.033l-.033-1.033-1 .033Zm-12.243 0-.999-.035-.036 1.035h1.035v-1Zm.612-17.63 1 .035.001-.028-.001-.027-1 .02Zm-.489-24.241-.084-.997-.935.079.019.938 1-.02Zm11.63-.979h1v-1.088l-1.084.091.084.997Zm0 6.243h-1v1h1v-1Zm.613 0v1h.378l.284-.25-.662-.75Zm11.018-6.611v-1h-.165l-.157.054.322.946Zm10.529 3.183-.667.745.006.006.006.005.655-.756Zm3.551 9.06-1-.021v.001l1 .02Zm-.245 12.243-1-.02v.046l1-.026Zm.49 18.732v1h1.026l-.027-1.026-.999.026Zm-12.243 0-1-.028-.028 1.028h1.028v-1Zm1.734-26.567c0-2.364-.501-4.323-1.678-5.7-1.203-1.407-2.959-2.034-5.076-2.034v2c1.719 0 2.84.496 3.555 1.333.742.868 1.199 2.275 1.199 4.401h2Zm-6.754-7.734c-3.099 0-6.258 1.457-9.459 4.153l1.288 1.53c3.002-2.529 5.719-3.683 8.171-3.683v-2Zm-9.815 4.918v10.651h2v-10.651h-2Zm0 10.684.613 18.732 1.999-.066-.613-18.731-1.999.065ZM598.595 421h-12.243v2h12.243v-2Zm-11.243 1.035.612-17.63-1.999-.07-.612 17.63 1.999.07Zm.612-17.685-.49-24.241-1.999.04.489 24.241 2-.04Zm-1.406-23.225 11.631-.979-.168-1.993-11.63.979.167 1.993Zm10.547-1.975v6.243h2v-6.243h-2Zm1 7.243h.613v-2h-.613v2Zm1.275-.25c3.426-3.028 6.986-5.157 10.678-6.414l-.644-1.893c-3.979 1.354-7.765 3.632-11.359 6.808l1.325 1.499Zm10.356-6.361c4.518 0 7.747 1.032 9.862 2.928l1.335-1.489c-2.62-2.349-6.41-3.439-11.197-3.439v2Zm9.874 2.939c2.177 1.887 3.283 4.594 3.206 8.283l1.999.042c.087-4.146-1.174-7.479-3.895-9.836l-1.31 1.511Zm3.206 8.284-.245 12.243 2 .04.244-12.243-1.999-.04Zm-.245 12.289.49 18.732 1.999-.052-.49-18.732-1.999.052Zm1.49 17.706h-12.243v2h12.243v-2Zm-11.244 1.028.735-26.568-1.999-.055-.735 26.567 1.999.056Zm62.901-36.879.243.97.757-.19v-.78h-1Zm-7.101 1.346-.156-.987-.433.068-.243.365.832.554Zm-.245.368-.832-.555-.322.483.26.519.894-.447Zm-3.673 17.14.637.771.002-.001-.639-.77Zm-18.731 3.55.178-.984-.515-.093-.371.37.708.707Zm.734 4.775-.333.943.033.011.033.01.267-.964Zm7.346 1.224-.118.993.118-.993Zm8.692 1.592-.265.964.015.004.016.004.234-.972Zm6.122 3.183-.671.742.009.007.008.008.654-.757Zm0 14.202-.786-.618-.008.01.794.608Zm-31.097 3.918-.604.797.604-.797Zm-4.53-8.938-.812-.583-.188.261v.322h1Zm7.713-6.856.514.858.486-.292v-.566h-1Zm0-.489h1v-.696l-.653-.242-.347.938Zm-6.611-8.326-.768-.64-.232.278v.362h1Zm6.244-5.631.578.815.422-.299v-.516h-1Zm0-.368h1v-.593l-.521-.285-.479.878Zm-1.837-23.017.637.772.002-.002-.639-.77Zm22.527-2.448-.4.916.281.123.301-.056-.182-.983Zm13.468-3.673.658-.753-.442-.386-.553.197.337.942Zm.979.857h1v-.454l-.341-.299-.659.753Zm-24.119 23.139.016-1h-.033l.017 1Zm7.101 22.895.342-.94-.019-.007-.019-.006-.304.953Zm-6.611-1.347.124-.992-.014-.002-.014-.002-.096.996Zm-4.53-.612.316-.949-.471-.157-.41.281.565.825Zm-2.081 9.672.555-.832-.555.832Zm13.222-.123-.479-.878-.024.013-.023.015.526.85Zm16.776-47.004c-1.59.398-3.922.841-7.015 1.33l.312 1.975c3.11-.491 5.512-.945 7.188-1.364l-.485-1.941Zm-7.691 1.763-.245.367 1.664 1.109.245-.367-1.664-1.109Zm-.307 1.369c.819 1.638 1.241 3.522 1.241 5.674h2c0-2.419-.476-4.616-1.452-6.569l-1.789.895Zm1.241 5.674c0 4.291-1.554 7.675-4.658 10.249l1.277 1.54c3.588-2.976 5.381-6.938 5.381-11.789h-2Zm-4.656 10.247c-3.032 2.501-7.268 3.812-12.831 3.812v2c5.864 0 10.606-1.383 14.104-4.269l-1.273-1.543Zm-12.831 3.812c-1.65 0-3.345-.157-5.086-.474l-.357 1.968a30.35 30.35 0 0 0 5.443.506v-2Zm-5.972-.197c-.958.958-1.639 2.019-1.639 3.156h2c0-.332.216-.904 1.054-1.742l-1.415-1.414Zm-1.639 3.156c0 .771.26 1.469.775 2.044.496.554 1.183.946 1.973 1.225l.666-1.886c-.597-.211-.951-.451-1.149-.673a.998.998 0 0 1-.265-.71h-2Zm2.814 3.29c1.548.43 4.063.845 7.495 1.253l.236-1.986c-3.424-.407-5.807-.809-7.196-1.195l-.535 1.928Zm7.495 1.253c3.396.405 6.241.927 8.545 1.563l.531-1.928c-2.43-.671-5.38-1.209-8.84-1.621l-.236 1.986Zm8.576 1.571c2.213.534 4.102 1.52 5.685 2.953l1.342-1.483c-1.845-1.669-4.037-2.806-6.558-3.414l-.469 1.944Zm5.702 2.968c1.538 1.328 2.347 3.193 2.347 5.732h2c0-3.011-.986-5.472-3.039-7.246l-1.308 1.514Zm2.347 5.732c0 2.628-.82 4.983-2.479 7.095l1.572 1.236c1.932-2.458 2.907-5.246 2.907-8.331h-2Zm-2.487 7.105c-3.502 4.568-9.231 6.954-17.448 6.954v2c8.597 0 15.029-2.511 19.036-7.738l-1.588-1.216Zm-17.448 6.954c-5.43 0-9.47-1.12-12.252-3.226l-1.207 1.595c3.258 2.466 7.788 3.631 13.459 3.631v-2Zm-12.252-3.226c-2.779-2.103-4.133-4.791-4.133-8.14h-2c0 3.998 1.666 7.268 4.926 9.735l1.207-1.595Zm-4.321-7.556c1.784-2.483 4.246-4.681 7.415-6.582l-1.029-1.715c-3.36 2.016-6.04 4.389-8.01 7.13l1.624 1.167Zm7.901-7.44v-.489h-2v.489h2Zm-.653-1.427c-2.086-.773-3.565-1.785-4.522-2.99-.947-1.192-1.436-2.639-1.436-4.398h-2c0 2.16.612 4.059 1.869 5.642 1.247 1.57 3.074 2.762 5.395 3.621l.694-1.875Zm-6.19-6.748c1.567-1.88 3.58-3.7 6.054-5.456l-1.157-1.631c-2.586 1.835-4.735 3.769-6.433 5.807l1.536 1.28Zm6.476-6.271v-.368h-2v.368h2Zm-.521-1.246c-2.115-1.153-3.655-2.587-4.671-4.287-1.016-1.699-1.542-3.72-1.542-6.098h-2c0 2.682.596 5.069 1.825 7.124 1.229 2.055 3.055 3.722 5.43 5.017l.958-1.756Zm-6.213-10.385c0-4.914 1.549-8.52 4.534-10.982l-1.273-1.543c-3.545 2.924-5.261 7.155-5.261 12.525h2Zm4.536-10.984c3.117-2.585 7.397-3.932 12.951-3.932v-2c-5.873 0-10.653 1.428-14.228 4.393l1.277 1.539Zm12.951-3.932c3.232 0 6.071.551 8.537 1.63l.801-1.832c-2.758-1.207-5.877-1.798-9.338-1.798v2Zm9.119 1.697c4.464-.827 9.005-2.065 13.622-3.714l-.673-1.884c-4.524 1.616-8.962 2.826-13.313 3.632l.364 1.966Zm12.627-3.904.98.857 1.317-1.505-.98-.857-1.317 1.505Zm.638.105v7.591h2v-7.591h-2Zm-14.528 15.671c0-2.498-.672-4.551-2.184-5.965-1.5-1.401-3.657-2.014-6.284-2.014v2c2.351 0 3.929.551 4.918 1.476.977.912 1.55 2.349 1.55 4.503h2Zm-8.468-7.979c-2.595 0-4.726.627-6.205 2.057-1.485 1.435-2.141 3.514-2.141 6.044h2c0-2.204.568-3.675 1.531-4.606.97-.938 2.512-1.495 4.815-1.495v-2Zm-8.346 8.101c0 2.634.636 4.791 2.093 6.272 1.463 1.488 3.578 2.118 6.147 2.074l-.034-2c-2.246.038-3.742-.515-4.687-1.476-.951-.968-1.519-2.525-1.519-4.87h-2Zm8.207 8.346c2.683.043 4.886-.592 6.411-2.093 1.525-1.5 2.196-3.692 2.196-6.375h-2c0 2.377-.594 3.961-1.599 4.949-1.005.989-2.598 1.558-4.976 1.519l-.032 2Zm10.811 25.445c0-1.04-.276-1.986-.877-2.777-.594-.784-1.448-1.34-2.475-1.713l-.683 1.879c.768.28 1.261.642 1.565 1.042.297.392.47.895.47 1.569h2Zm-3.39-4.503c-1.872-.596-4.14-1.055-6.791-1.386l-.248 1.984c2.573.322 4.713.76 6.432 1.307l.607-1.905Zm-6.819-1.39a80.935 80.935 0 0 1-2.992-.332c-.77-.104-1.176-.186-1.318-.233l-.632 1.897c.349.117.942.218 1.682.318.773.105 1.797.218 3.068.341l.192-1.991Zm-5.191-.441c-1.476 1.012-2.638 2.028-3.438 3.057-.802 1.032-1.282 2.13-1.282 3.277h2c0-.567.235-1.244.861-2.049.628-.807 1.609-1.689 2.99-2.636l-1.131-1.649Zm-4.72 6.334c0 2.123.896 3.826 2.649 4.995l1.11-1.664c-1.186-.791-1.759-1.863-1.759-3.331h-2Zm2.649 4.995c1.703 1.135 4.053 1.637 6.921 1.637v-2c-2.681 0-4.576-.478-5.811-1.301l-1.11 1.664Zm6.921 1.637c2.969 0 5.458-.55 7.383-1.742l-1.053-1.7c-1.503.93-3.585 1.442-6.33 1.442v2Zm7.335-1.714c2.043-1.114 3.215-2.761 3.215-4.918h-2c0 1.271-.624 2.318-2.173 3.162l.958 1.756Zm53.278-48.013.747-.665-.747.665Zm-.49 33.056-.744-.668v.001l.744.667Zm-29.505.367-.755.656.008.009.008.009.739-.674Zm.367-33.056.745.667-.745-.667Zm8.203 5.387.832.555.005-.008.005-.008-.842-.539Zm0 21.425-.876.483.004.007.004.006.868-.496Zm12.855-20.813-.87.493.87-.493Zm-6.122-10.876c6.343 0 10.927 1.779 13.945 5.174l1.494-1.329c-3.511-3.95-8.722-5.845-15.439-5.845v2Zm13.945 5.174c3.041 3.421 4.644 8.57 4.644 15.619h2c0-7.317-1.661-13.023-5.15-16.948l-1.494 1.329Zm4.644 15.619c0 7.02-1.753 12.343-5.131 16.105l1.488 1.336c3.805-4.237 5.643-10.096 5.643-17.441h-2Zm-5.131 16.106c-3.279 3.659-7.959 5.543-14.192 5.543v2c6.663 0 11.94-2.033 15.681-6.209l-1.489-1.334Zm-14.192 5.543c-6.169 0-10.723-1.772-13.83-5.182l-1.478 1.347c3.586 3.935 8.744 5.835 15.308 5.835v-2Zm-13.815-5.165c-3.049-3.506-4.651-8.703-4.651-15.75h-2c0 7.319 1.662 13.06 5.142 17.062l1.509-1.312Zm-4.651-15.75c0-7.027 1.715-12.306 5.009-15.983l-1.49-1.334c-3.726 4.159-5.519 9.979-5.519 17.317h2Zm5.009-15.983c3.278-3.659 7.958-5.544 14.191-5.544v-2c-6.662 0-11.94 2.033-15.681 6.21l1.49 1.334Zm13.824.659c-3.195 0-5.678 1.13-7.208 3.522l1.684 1.078c1.081-1.689 2.843-2.6 5.524-2.6v-2Zm-7.198 3.506c-1.484 2.226-2.127 5.962-2.127 10.961h2c0-4.958.663-8.159 1.791-9.851l-1.664-1.11Zm-2.127 10.961c0 5.028.653 8.909 2.083 11.502l1.751-.966c-1.181-2.141-1.834-5.605-1.834-10.536h-2Zm2.091 11.515c1.513 2.649 4.041 3.932 7.357 3.932v-2c-2.725 0-4.522-1.002-5.621-2.924l-1.736.992Zm7.357 3.932c3.231 0 5.759-1.016 7.309-3.245l-1.641-1.142c-1.062 1.526-2.86 2.387-5.668 2.387v2Zm7.309-3.245c1.498-2.152 2.138-5.863 2.138-10.855h-2c0 4.966-.665 8.112-1.779 9.713l1.641 1.142Zm2.138-10.855c0-5.037-.696-8.96-2.211-11.634l-1.74.986c1.26 2.223 1.951 5.728 1.951 10.648h2Zm-2.211-11.634c-1.575-2.779-4.08-4.18-7.359-4.18v2c2.598 0 4.418 1.047 5.619 3.166l1.74-.986Zm38.022 42.609v1h.769l.197-.744-.966-.256Zm-8.448 0-.8.6.3.4h.5v-1Zm-.735-.979-.967-.254-.122.467.289.387.8-.6Zm18.855-71.989v-1h-.772l-.196.746.968.254Zm8.325 0 .781-.625-.301-.375h-.48v1Zm.979 1.224.967.256.129-.487-.315-.394-.781.625Zm-18.976 70.744h-8.448v2h8.448v-2Zm-7.648.4-.735-.979-1.6 1.2.735.979 1.6-1.2Zm-.567-.126 18.854-71.989-1.935-.507-18.854 71.989 1.935.507Zm17.887-71.242h8.325v-2h-8.325v2Zm7.544-.376.979 1.225 1.562-1.25-.979-1.224-1.562 1.249Zm.793.344-18.976 71.744 1.933.512 18.977-71.744-1.934-.512Zm39.792 32.7h1v-.303l-.168-.252-.832.555Zm0 9.917.356.934.644-.245v-.689h-1Zm-34.403 13.1-.614.789.444.345.526-.2-.356-.934Zm-1.102-.857-.969.246.085.333.27.21.614-.789Zm-1.714-6.734-.345-.939-.846.312.222.874.969-.247Zm28.649-10.529.345.939.655-.241v-.698h-1Zm0-.612h1v-.691l-.647-.245-.353.936Zm-28.526-10.774-.848.53.179.286.315.12.354-.936Zm-.612-.979-.933-.36-.18.466.265.424.848-.53Zm2.693-6.979.363-.932-.935-.363-.361.935.933.36Zm34.28 13.345.833-.555-.176-.262-.294-.115-.363.932Zm-.265 1.102v9.917h2v-9.917h-2Zm.644 8.982-34.403 13.1.712 1.869 34.403-13.1-.712-1.869Zm-33.433 13.245-1.102-.857-1.228 1.579 1.102.857 1.228-1.579Zm-.747-.314-1.714-6.734-1.938.494 1.714 6.733 1.938-.493Zm-2.338-5.548 28.649-10.529-.69-1.877-28.649 10.528.69 1.878Zm29.304-11.468v-.612h-2v.612h2Zm-.647-1.548-28.526-10.773-.707 1.871 28.527 10.773.706-1.871Zm-28.031-10.368-.612-.979-1.696 1.06.612.979 1.696-1.06Zm-.527-.089 2.693-6.979-1.866-.72-2.693 6.979 1.866.72Zm1.397-6.407 34.281 13.345.725-1.864-34.28-13.345-.726 1.864Zm33.811 12.968.735 1.102 1.664-1.11-.734-1.102-1.665 1.11Z"
      />
    </G>
    <Path
      fill="#37454D"
      d="m117.17 191.34 54.641 166.251c18.222 33.484 110.838 35.281 211.272 2.272 100.433-33.009 173.011-89.099 167.816-126.865l.914-.3-54.641-166.251L117.17 191.34Z"
    />
    <Path
      fill="#222627"
      d="M479.359 72.301 534 238.552c5.397 37.7-64.699 90.533-160.33 123.839 3.079-.959 6.242-1.723 9.342-2.741 100.433-33.009 173.99-89.184 168.8-126.952l-54.64-166.251-17.813 5.854Z"
    />
    <Path
      fill="#131718"
      d="m594.124 41.16 2.457 7.476-278.85 53.958c-10.619 1.338-25.077 6.09-34.414 11.31L32.214 233.11l-.204-.623-17.813 5.854 1.553 4.726.281.855.865 2.631c.377 1.145 4.268 1.156 7.681 1.192l243.589-6.25c10.71.138 27.021-4.44 36.099-10.108L604.114 55.522c3.103-1.947 6.522-4.137 6.196-5.128l-.531-1.615-.34-1.033-1.494-4.549-13.821-2.036Z"
    />
    <Path
      fill="#37454D"
      d="M606.405 38.493c-.314-.956-4.375-.601-8.077-.135L315.745 92.99c-10.621 1.333-27.08 6.742-36.42 11.97L19.115 228.725c-3.183 1.783-6.758 4.017-6.405 5.092l1.487 4.524c.377 1.146 3.927.117 7.342.159l243.589-6.25c10.709.138 27.022-4.434 36.1-10.102 0 0 307.044-177.953 306.72-178.939l-1.543-4.716Z"
    />
    <Path
      fill="#FFD464"
      d="M471.934 339.957c-5.1 1.676-10.264-1.205-11.944-6.318l-54.032-164.398-115.386-.715c-5.376-.023-9.365-4.514-9.344-9.896.02-5.382 4.585-9.79 9.949-9.743l122.154.832c4.198.022 12.983 1.391 14.291 5.369l56.592 172.188c1.678 5.107-7.179 11.005-12.28 12.681Z"
    />
    <Path
      fill="#E16B5A"
      d="m501.945 341.192-6.33-19.261c-4.196-12.766-18.585-19.517-31.351-15.321-12.766 4.195-20.347 18.161-16.149 30.932l6.33 19.262 47.5-15.612Z"
    />
    <Path
      fill="#FFD464"
      d="m501.945 341.192-47.501 15.612 17.563 53.437 47.501-15.611-17.563-53.438Z"
    />
    <Path
      fill="#FFE399"
      d="m466.319 352.901-5.937 1.951 17.563 53.438 5.937-1.951-17.563-53.438ZM478.194 348.998l-5.937 1.951 17.563 53.438 5.937-1.951-17.563-53.438ZM490.069 345.095l-5.937 1.951 17.563 53.438 5.937-1.951-17.563-53.438Z"
    />
    <Defs></Defs>
  </Svg>
)
export default SvgComponent
