
const search = () => {
  return (
    <div className="search group/search  cursor-pointer relative w-[400px]">
            <div className="flex items-center border rounded-2xl hover:border-pink-500 width-full border-gray-300">
              <CiSearch className="text-[1.4rem] mx-4" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="text"
                className="outline-none border-none capitalize text-[14px] p-2"
                placeholder="Nhap ten san pham"
              />
              <button className="rounded-2xl text-[14px] text-gray-700  p-3 bg-gray-300  ml-auto   hover:text-white hover:bg-gray-600 duration-200 transition-all">
                Search
              </button>
            </div>
          
          </div>
  )
}

export default search
