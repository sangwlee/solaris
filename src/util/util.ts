export const searchFilter = (searchStr, user) => {
  const { firstname, lastname, username } = user

  for (const name of [firstname, lastname, username]) {
    if (name.toLowerCase().includes(searchStr.toLowerCase())) { return true }
  }

  return false
}