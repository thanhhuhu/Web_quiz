export const quizzes = [
    {
        id: 1,
        title: 'React basic',
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
    }
];
