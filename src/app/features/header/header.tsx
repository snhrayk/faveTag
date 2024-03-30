import { menu } from "@/app/style/color";
import Image from "next/image";

export default function Header() {
  return (
    <div style={headerWrap}>
      <Image alt="通知" src="./image/notice_icon.svg" width={18} height={24} />
      <Image alt="ロゴ" src="./image/faveTag_logo.svg" width={62} height={30} />
      <Image
        alt="アコーディオンメニュー"
        src="./image/menu_icon.svg"
        width={18}
        height={24}
      />
    </div>
  );
}

const headerWrap = {
  width: "",
  height: "44px",
  backgroundColor: menu,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};
