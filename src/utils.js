export const sortArrayByDate = (arr) =>
  arr.sort(function (a, b) {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
