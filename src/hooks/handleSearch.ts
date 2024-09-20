interface Props {
  title: string;
  owner: string;
  content: string;
}

export const handleSearch = (boardlist: [], searchQuery: string, searchFilterOption: string) => {
  if (searchQuery.trim() === "") {
    return boardlist;
  } else {
    const query = searchQuery.toLowerCase();
    return boardlist.filter((item: Props) => {
      switch (searchFilterOption) {
        case "title":
          return item.title.toLowerCase().includes(query);
        case "owner":
          return item.owner.toLowerCase().includes(query);
        case "titleAndContent":
          return (
            item.title.toLowerCase().includes(query) || item.content.toLowerCase().includes(query)
          );
        default:
          return false;
      }
    });
  }
};
