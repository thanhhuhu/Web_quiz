export const quizzes = [
    {
        id: 1,
        title: 'React basic',
        time: '10 minutes',
        questions: [
            {
                question: 'React là gì?',
                options: ['Library', 'Framework', 'Ngôn ngữ'],
                answer: 0
            },
            {
                question: 'React được phát triển bởi công ty nào?',
                options: ['Google', 'Facebook', 'Microsoft'],
                answer: 1
            },
            {
                question: 'JSX là gì?',
                options: [
                    'Một ngôn ngữ mới',
                    'Cú pháp mở rộng của JavaScript',
                    'Một framework CSS'
                ],
                answer: 1
            },
            {
                question: 'Component trong React dùng để làm gì?',
                options: [
                    'Chia nhỏ UI',
                    'Kết nối database',
                    'Xử lý backend'
                ],
                answer: 0
            },
            {
                question: 'Hook nào dùng để quản lý state?',
                options: ['useEffect', 'useState', 'useMemo'],
                answer: 1
            },
            {
                question: 'useEffect dùng để làm gì?',
                options: [
                    'Quản lý state',
                    'Xử lý side effects',
                    'Tạo component'
                ],
                answer: 1
            },
            {
                question: 'Props là gì?',
                options: [
                    'Dữ liệu truyền vào component',
                    'State nội bộ',
                    'Hook'
                ],
                answer: 0
            },
            {
                question: 'Key trong React dùng để làm gì?',
                options: [
                    'Định danh phần tử trong list',
                    'Bảo mật',
                    'Gọi API'
                ],
                answer: 0
            },
            {
                question: 'Virtual DOM giúp gì?',
                options: [
                    'Tăng hiệu suất render',
                    'Lưu dữ liệu',
                    'Kết nối server'
                ],
                answer: 0
            },
            {
                question: 'React hoạt động theo mô hình nào?',
                options: ['MVC', 'Component-based', 'Client-Server'],
                answer: 1
            }
        ]
    },
    {
        id: 2,
        title: 'TypeScript basic',
        time: '10 minutes',
        questions: [
            {
                question: 'TypeScript là gì?',
                options: ['Ngôn ngữ', 'Framework', 'Database'],
                answer: 0
            },
            {
                question: 'TypeScript được xây dựng dựa trên ngôn ngữ nào?',
                options: ['Java', 'JavaScript', 'C#'],
                answer: 1
            },
            {
                question: 'TypeScript giúp ích gì?',
                options: [
                    'Kiểm tra kiểu dữ liệu',
                    'Tăng tốc mạng',
                    'Quản lý database'
                ],
                answer: 0
            },
            {
                question: 'Kiểu dữ liệu nào sau đây là hợp lệ?',
                options: ['number', 'float', 'double'],
                answer: 0
            },
            {
                question: 'Interface dùng để làm gì?',
                options: [
                    'Định nghĩa cấu trúc object',
                    'Tạo component',
                    'Gọi API'
                ],
                answer: 0
            },
            {
                question: 'Type any có đặc điểm gì?',
                options: [
                    'Không kiểm tra kiểu',
                    'Bắt buộc kiểu',
                    'Chỉ dùng cho number'
                ],
                answer: 0
            },
            {
                question: 'Enum dùng để làm gì?',
                options: [
                    'Định nghĩa tập giá trị cố định',
                    'Khai báo hàm',
                    'Xử lý promise'
                ],
                answer: 0
            },
            {
                question: 'Readonly dùng để?',
                options: [
                    'Chỉ đọc, không thay đổi',
                    'Tạo biến toàn cục',
                    'Xóa dữ liệu'
                ],
                answer: 0
            },
            {
                question: 'Type assertion dùng để làm gì?',
                options: [
                    'Ép kiểu dữ liệu',
                    'Tạo interface',
                    'Xóa type'
                ],
                answer: 0
            },
            {
                question: 'TypeScript code chạy trực tiếp trên trình duyệt không?',
                options: ['Có', 'Không'],
                answer: 1
            }
        ]
    },
    {
        id: 3,
        title: 'NodeJS basic',
        time: '10 minutes',
        questions: [
            {
                question: 'NodeJS chạy ở đâu?',
                options: ['Browser', 'Server', 'Database'],
                answer: 1
            },
            {
                question: 'NodeJS được xây dựng trên engine nào?',
                options: ['SpiderMonkey', 'V8', 'Chakra'],
                answer: 1
            },
            {
                question: 'NodeJS dùng ngôn ngữ nào?',
                options: ['Java', 'JavaScript', 'Python'],
                answer: 1
            },
            {
                question: 'npm là gì?',
                options: [
                    'Node Package Manager',
                    'Node Process Manager',
                    'Network Package Module'
                ],
                answer: 0
            },
            {
                question: 'NodeJS có đặc điểm gì?',
                options: [
                    'Đồng bộ',
                    'Bất đồng bộ',
                    'Đa luồng truyền thống'
                ],
                answer: 1
            },
            {
                question: 'Express là gì?',
                options: [
                    'Framework cho NodeJS',
                    'Database',
                    'Frontend library'
                ],
                answer: 0
            },
            {
                question: 'HTTP method nào dùng để lấy dữ liệu?',
                options: ['POST', 'GET', 'PUT'],
                answer: 1
            },
            {
                question: 'Middleware dùng để làm gì?',
                options: [
                    'Xử lý request trước response',
                    'Lưu database',
                    'Render UI'
                ],
                answer: 0
            },
            {
                question: 'NodeJS phù hợp cho ứng dụng nào?',
                options: [
                    'Real-time app',
                    'Game offline',
                    'Ứng dụng desktop'
                ],
                answer: 0
            },
            {
                question: 'Event Loop dùng để làm gì?',
                options: [
                    'Xử lý bất đồng bộ',
                    'Render UI',
                    'Kết nối database'
                ],
                answer: 0
            }
        ]
    },
    {
        id: 4,
        title: 'JavaScript basic',
        time: '10 minutes',
        questions: [
            {
                question: 'JavaScript là gì?',
                options: ['Ngôn ngữ lập trình', 'Framework', 'Database'],
                answer: 0
            },
            {
                question: 'JavaScript chạy chủ yếu ở đâu?',
                options: ['Browser', 'Database', 'Compiler'],
                answer: 0
            },
            {
                question: 'Khai báo biến bằng từ khóa nào?',
                options: ['var', 'let', 'const'],
                answer: 0
            },
            {
                question: 'let khác var ở điểm nào?',
                options: [
                    'Phạm vi block',
                    'Chạy nhanh hơn',
                    'Không dùng được'
                ],
                answer: 0
            },
            {
                question: 'const dùng khi nào?',
                options: [
                    'Khi giá trị không đổi',
                    'Khi giá trị thay đổi',
                    'Khi cần loop'
                ],
                answer: 0
            },
            {
                question: 'Kiểu dữ liệu nào là primitive?',
                options: ['number', 'object', 'array'],
                answer: 0
            },
            {
                question: '=== khác == ở điểm nào?',
                options: [
                    'So sánh cả kiểu và giá trị',
                    'Chỉ so sánh giá trị',
                    'Không khác nhau'
                ],
                answer: 0
            },
            {
                question: 'Arrow function có cú pháp nào?',
                options: ['=>', '->', '==>'],
                answer: 0
            },
            {
                question: 'Array dùng để làm gì?',
                options: [
                    'Lưu nhiều giá trị',
                    'Lưu một giá trị',
                    'Lưu object'
                ],
                answer: 0
            },
            {
                question: 'Promise dùng để xử lý gì?',
                options: [
                    'Bất đồng bộ',
                    'Vòng lặp',
                    'Biến'
                ],
                answer: 0
            }
        ]
    },
    {
        id: 5,
        title: 'HTML & CSS basic',
        time: '10 minutes',
        questions: [
            {
                question: 'HTML là viết tắt của?',
                options: [
                    'HyperText Markup Language',
                    'HighText Machine Language',
                    'Hyper Tool Language'
                ],
                answer: 0
            },
            {
                question: 'HTML dùng để làm gì?',
                options: [
                    'Xây dựng cấu trúc trang web',
                    'Xử lý logic',
                    'Kết nối database'
                ],
                answer: 0
            },
            {
                question: 'Thẻ nào tạo link?',
                options: ['<a>', '<link>', '<href>'],
                answer: 0
            },
            {
                question: 'CSS dùng để làm gì?',
                options: [
                    'Trang trí giao diện',
                    'Xử lý backend',
                    'Lưu dữ liệu'
                ],
                answer: 0
            },
            {
                question: 'Thuộc tính nào đổi màu chữ?',
                options: ['color', 'background', 'font-size'],
                answer: 0
            },
            {
                question: 'display: flex dùng để?',
                options: [
                    'Tạo layout linh hoạt',
                    'Ẩn phần tử',
                    'Load ảnh'
                ],
                answer: 0
            },
            {
                question: 'Position nào bám theo màn hình?',
                options: ['fixed', 'absolute', 'relative'],
                answer: 0
            },
            {
                question: 'margin dùng để?',
                options: [
                    'Tạo khoảng cách bên ngoài',
                    'Tạo viền',
                    'Đổi màu'
                ],
                answer: 0
            },
            {
                question: 'padding dùng để?',
                options: [
                    'Tạo khoảng cách bên trong',
                    'Căn giữa',
                    'Ẩn nội dung'
                ],
                answer: 0
            },
            {
                question: 'Responsive là gì?',
                options: [
                    'Giao diện phù hợp nhiều màn hình',
                    'Trang web tải nhanh',
                    'Web dùng server'
                ],
                answer: 0
            }
        ]
    },
    {
        id: 6,
        title: 'Git & GitHub basic',
        time: '10 minutes',
        questions: [
            {
                question: 'Git là gì?',
                options: [
                    'Hệ thống quản lý phiên bản',
                    'Framework',
                    'IDE'
                ],
                answer: 0
            },
            {
                question: 'GitHub dùng để làm gì?',
                options: [
                    'Lưu trữ source code',
                    'Chạy backend',
                    'Viết CSS'
                ],
                answer: 0
            },
            {
                question: 'Lệnh git init dùng để?',
                options: [
                    'Khởi tạo repository',
                    'Push code',
                    'Clone project'
                ],
                answer: 0
            },
            {
                question: 'git status dùng để?',
                options: [
                    'Xem trạng thái file',
                    'Xem log',
                    'Xóa branch'
                ],
                answer: 0
            },
            {
                question: 'git add . dùng để?',
                options: [
                    'Đưa file vào staging',
                    'Commit code',
                    'Push code'
                ],
                answer: 0
            },
            {
                question: 'git commit dùng để?',
                options: [
                    'Lưu snapshot code',
                    'Xóa file',
                    'Tạo repo'
                ],
                answer: 0
            },
            {
                question: 'git push dùng để?',
                options: [
                    'Đẩy code lên remote',
                    'Lấy code về',
                    'Tạo branch'
                ],
                answer: 0
            },
            {
                question: 'git pull dùng để?',
                options: [
                    'Cập nhật code từ remote',
                    'Xóa commit',
                    'Reset code'
                ],
                answer: 0
            },
            {
                question: 'Branch dùng để?',
                options: [
                    'Phát triển tính năng riêng',
                    'Lưu database',
                    'Build project'
                ],
                answer: 0
            },
            {
                question: 'Merge dùng để?',
                options: [
                    'Gộp các branch',
                    'Xóa repo',
                    'Đổi tên file'
                ],
                answer: 0
            }
        ]
    }
];

