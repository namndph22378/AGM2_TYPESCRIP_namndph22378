type Props = {};
const Header = (props: Props) => {
  return (
    <div className="container   h-[64px]  m-auto flex justify-around items-center gap-10">
      <div className="flex items-center gap-6 w-3/4">
       <a href="http://localhost:5173/"> <img className="w-[64px] pl-2" src="" alt="" /></a>
        <p></p>
        <input
          className="pl-2 rounded-lg grow h-[34px] "
          type="text"
          placeholder="search"
        />
      </div>

      <h2>Xin chào Admin</h2>
    </div>
  );
};

export default Header;