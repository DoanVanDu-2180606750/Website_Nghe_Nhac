// Sử dụng Fetch API để gửi yêu cầu GET đến backend
fetch('http://localhost:8080/play-list')
  .then(response => {
    // Kiểm tra nếu yêu cầu thành công (status code 200)
    if (response.ok) {
      return response.json(); // Trả về dữ liệu từ backend dưới dạng JSON
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    // Xử lý dữ liệu từ backend ở đây
    console.log('Dữ liệu từ backend:', data);
  })
  .catch(error => {
    // Xử lý lỗi nếu có
    console.error('There was a problem with the fetch operation:', error);
  });
