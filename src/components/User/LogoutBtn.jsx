/* eslint-disable react/button-has-type */

import apiV1Instance from '../../api/api-instance';
import useIsLoginStore from '../../stores/isLoginStore';

export default function LogoutBtn() {
  const { setIsLogin } = useIsLoginStore();
  const clickLogout = async () => {
    try {
      const res = await apiV1Instance.post('/auth/logout/');
      setIsLogin(false);
      alert(`${res.data.nickname} 님 ${res.data.message}`);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <button
      className="w-[6.8rem] h-[1.8rem] bg-cover bg-[url('./assets/logout.png')] cursor-pointer"
      onClick={() => {
        clickLogout();
      }}
    />
  );
}
