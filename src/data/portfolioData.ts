/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Skill, LearningGoal, TimelineEvent } from '../types';

export const personalInfo = {
  fullName: "Nguyễn Đức Huy",
  studentId: "25024198",
  classId: "K70G-BE",
  major: "Công nghệ Sinh học",
  university: "Đại học Công nghệ – Đại học Quốc gia Hà Nội",
  hobbies: "Tìm hiểu những điều mới mẻ, đọc tài liệu khoa học ứng dụng di truyền, thử nghiệm các mô hình AI phục vụ nghiên cứu sự sống.",
  avatarPlaceholder: "/src/assets/images/student_avatar_new_1780850121740.png"
};

export const learningGoals: LearningGoal[] = [
  {
    type: 'academic',
    content: "Đạt học bổng khuyến khích học tập trong năm học thứ 2 tại Đại học Công nghệ."
  },
  {
    type: 'research',
    content: "Có tên trong một bài báo nghiên cứu khoa học được đăng trên tạp chí uy tín trong và ngoài nước thuộc ngành Sinh học tổng hợp."
  },
  {
    type: 'portfolio',
    content: "Hệ thống hóa toàn bộ tài nguyên học thuật, rèn luyện tư duy số hóa dữ liệu học tập liên tục."
  }
];

export const developmentDirections = [
  "Học lên bậc đào tạo Thạc sĩ công nghệ sinh học tế bào sau tốt nghiệp.",
  "Chủ động tham gia nghiên cứu khoa học chuyên sâu tại Lab sinh học phân tử của trường UET.",
  "Ứng dụng chuyển đổi số và AI vào phục vụ tối ưu hóa chuỗi thí nghiệm sinh hóa thực nghiệm."
];

export const portfolioObjectives = [
  "Trình bày thành quả học tập một cách trực quan của học phần Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo (AI).",
  "Lưu giữ lâu dài các sản phẩm học tập thiết yếu làm tài liệu tham khảo cho tương lai.",
  "Giới thiệu năng lực tự học, làm việc nhóm số hóa và phản ánh năng lực cá nhân một cách thực tiễn."
];

export const timelineEvents: TimelineEvent[] = [
  {
    year: "Học kỳ 1 - Năm 1",
    title: "Làm quen môi trường đại học số",
    description: "Tiếp cận hệ thống quản lý học tập số, định hình phương pháp học đại học chủ động."
  },
  {
    year: "Học kỳ 2 - Năm 1",
    title: "Nhập môn Công nghệ số và Ứng dụng Trí tuệ nhân tạo (AI)",
    description: "Nhận thức toàn diện sức mạnh của công nghệ đám mây, các mô hình ngôn ngữ lớn (LLM), kỹ năng làm việc nhóm trực tuyến đồng bộ."
  },
  {
    year: "Năm 2 (Dự kiến)",
    title: "Vào phòng Lab chuyên sâu",
    description: "Bắt đầu ứng dụng các kỹ năng số hóa để lưu trữ dữ liệu thí nghiệm, viết báo cáo lý thuyết di truyền phân tử."
  },
  {
    year: "Năm 3 (Dự kiến)",
    title: "Nghiên cứu khoa học sinh viên",
    description: "Phối hợp cùng giảng viên dùng AI để hỗ trợ sàng lọc thông tin thuốc kháng nấm, hướng đến tạp chí quốc gia."
  },
  {
    year: "Năm 4 (Dự kiến)",
    title: "Hoàn thiện khóa luận tốt nghiệp",
    description: "Thuyết trình khóa luận tối ưu bằng công cụ trình chiếu chuyên nghiệp, chuẩn bị học thạc sĩ."
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "Bài 1 - Bài tập 1 của mục 1.4: Thao tác cơ bản với tệp tin và thư mục",
    objective: "Trang bị và chuẩn hóa các kỹ năng thao tác tệp tin và quản lý thư mục cơ bản trên hệ điều hành Windows, giúp sinh viên làm quen với việc tổ chức kho lưu trữ dữ liệu khoa học một cách khoa học, chuyên nghiệp, tạo nền tảng vững chắc cho việc quản lý các tệp thông tin trình tự di truyền và kết quả thí nghiệm công nghệ sinh học sau này.",
    shortDesc: "Rèn luyện thao tác File Explorer cơ bản như tạo, đổi tên, sao chép, di chuyển, và xóa tệp tin, thư mục chuẩn xác.",
    iconName: "FolderGit2",
    image: "https://picsum.photos/seed/folder/600/400",
    details: {
      objective: "Trang bị và chuẩn hóa các kỹ năng thao tác tệp tin và quản lý thư mục cơ bản trên hệ điều hành Windows, giúp sinh viên làm quen với việc tổ chức kho lưu trữ dữ liệu khoa học một cách khoa học, chuyên nghiệp, tạo nền tảng vững chắc cho việc quản lý các tệp thông tin trình tự di truyền và kết quả thí nghiệm công nghệ sinh học sau này.",
      process: [
        "Mở File Explorer: Nhấn tổ hợp phím Windows + E hoặc nhấp vào biểu tượng thư mục màu vàng trên thanh tác vụ.",
        "Truy cập ổ đĩa/thư mục: Ở cột bên trái, nhấp vào This PC, sau đó nhấp đúp vào một ổ đĩa không phải ổ hệ thống (ví dụ: ổ D: hoặc E:). Nếu chỉ có ổ C:, hãy vào thư mục Documents.",
        "Tạo thư mục mới: Nhấp chuột phải vào một khoảng trống -> chọn New -> Folder. Đặt tên thư mục là ThucHanh_hotensinhvien (ví dụ: ThucHanh_NguyenVanA). Nhấn Enter.",
        "Vào thư mục vừa tạo: Nhấp đúp vào thư mục ThucHanh_NguyenVanA.",
        "Tạo tệp tin văn bản: Nhấp chuột phải vào khoảng trống -> New -> Text Document. Đặt tên là GhiChu.txt. Nhấn Enter.",
        "Đổi tên tệp tin: Nhấp chuột phải vào tệp GhiChu.txt -> chọn Rename. Đổi tên thành GhiChuQuanTrong.txt. Nhấn Enter.",
        "Tạo thư mục con: Trong thư mục ThucHanh_NguyenVanA, nhấp chuột phải -> New -> Folder. Đặt tên là TaiLieu.",
        "Sao chép tệp tin (Copy & Paste): Nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Copy (hoặc chọn tệp rồi nhấn Ctrl + C). Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống bên trong -> chọn Paste (hoặc nhấn Ctrl + V). Bây giờ bạn có một bản sao của tệp trong thư mục TaiLieu.",
        "Di chuyển tệp tin (Cut & Paste): Quay lại thư mục ThucHanh_NguyenVanA. Tạo một tệp mới tên là DiChuyen.txt. Nhấp chuột phải vào tệp DiChuyen.txt -> chọn Cut (hoặc chọn tệp rồi nhấn Ctrl + X). Nhấp đúp vào thư mục TaiLieu, nhấp chuột phải vào khoảng trống -> chọn Paste (hoặc nhấn Ctrl + V). Tệp gốc đã biến mất khỏi vị trí cũ và chỉ còn ở vị trí mới.",
        "Xóa tệp tin: Trong thư mục TaiLieu, nhấp chuột phải vào tệp GhiChuQuanTrong.txt -> chọn Delete. Tệp sẽ được chuyển vào Thùng rác (Recycle Bin).",
        "Xóa vĩnh viễn: Chọn tệp DiChuyen.txt, nhấn giữ phím Shift và nhấn phím Delete. Một cảnh báo sẽ hiện ra. Nếu đồng ý, tệp sẽ bị xóa vĩnh viễn mà không qua Thùng rác.",
        "Khôi phục từ Thùng rác (Tùy chọn): Tìm biểu tượng Recycle Bin trên màn hình nền, nhấp đúp để mở. Tìm tệp GhiChuQuanTrong.txt đã xóa, nhấp chuột phải vào nó và chọn Restore. Tệp sẽ quay trở lại vị trí ban đầu."
      ],
      evidenceDesc: "Ảnh chụp màn hình các tầng thư mục ThucHanh_NguyenDucHuy được lưu giữ gọn gàng, thể hiện kỹ năng thao tác tệp tin thuần thục trên Windows.",
      finalProduct: "Cấu trúc thư mục thực hành tiêu chuẩn trên máy tính cá nhân phục vụ việc sắp xếp tài nguyên thông tin lâu dài.",
      googleDocsUrl: "https://docs.google.com/document/d/1FZ7tZ3u3EH8p6t8BKXlGxOoIViu1MkiLK2J0NK72MAs/edit?usp=drive_link"
    }
  },
  {
    id: 2,
    title: "Bài 2 - Bài tập 2 của mục 2.4: Tìm kiếm và đánh giá thông tin học thuật",
    objective: "Hình thành và phát triển tư duy nghiên cứu độc lập thông qua việc làm chủ các phương pháp truy vấn thông tin nâng cao trên cơ sở dữ liệu học thuật uy tín như Google Scholar hay PubMed. Đồng thời, áp dụng tiêu chuẩn kiểm định CRAAP để đánh giá một cách toàn diện và lý tính về tính cập nhật, độ tin cậy, thẩm quyền và mục đích của tài liệu tham khảo chuyên ngành y học và sinh học.",
    shortDesc: "Tìm kiếm học thuật tối ưu qua các công cụ tìm kiếm và đánh giá uy tín nguồn lực theo phương pháp CRAAP lý tính.",
    iconName: "Search",
    image: "https://picsum.photos/seed/search/600/400",
    details: {
      objective: "Hình thành và phát triển tư duy nghiên cứu độc lập thông qua việc làm chủ các phương pháp truy vấn thông tin nâng cao trên cơ sở dữ liệu học thuật uy tín như Google Scholar hay PubMed. Đồng thời, áp dụng tiêu chuẩn kiểm định CRAAP để đánh giá một cách toàn diện và lý tính về tính cập nhật, độ tin cậy, thẩm quyền và mục đích của tài liệu tham khảo chuyên ngành y học và sinh học.",
      process: [
        "Chọn một chủ đề liên quan đến ngành học của bạn.",
        "Thực hiện tìm kiếm thông tin từ các nguồn sau: Cơ sở dữ liệu học thuật (Google Scholar, Microsoft Academic, CSDL của thư viện trường), Tạp chí khoa học chuyên ngành, Sách chuyên khảo, Các nguồn mở trên Internet.",
        "Thu thập ít nhất 10 tài liệu tham khảo liên quan đến chủ đề (bao gồm ít nhất 5 bài báo khoa học).",
        "Đánh giá độ tin cậy của mỗi nguồn thông tin dựa trên các tiêu chí: tác giả, cơ quan xuất bản, phương pháp nghiên cứu, trích dẫn, tính cập nhật.",
        "Tạo bảng tổng hợp các nguồn thông tin với đánh giá và xếp hạng độ tin cậy."
      ],
      evidenceDesc: "Bảng phân tích đánh giá 10 nguồn tài liệu y sinh di truyền học theo thang CRAAP chuẩn hóa kèm theo trích lục APA.",
      finalProduct: "Danh lục tổng quan học thuật (Literature Review) cùng bảng đánh giá độ tin cậy học thuật toàn diện.",
      googleDocsUrl: "https://docs.google.com/document/d/1YkxLYVz0FfB6gB9auZh1BcqSGUFel9H4/edit?usp=drive_link&ouid=114299175875239430517&rtpof=true&sd=true"
    }
  },
  {
    id: 3,
    title: "Bài 3 - Bài tập 2 của mục 3.4: Viết Prompt hiệu quả cho các tác vụ học tập",
    objective: "Nghiên cứu nguyên lý hoạt động và nâng cao năng lực làm chủ kỹ nghệ thiết kế câu lệnh (Prompt Engineering) với các mô hình ngôn ngữ lớn (LLM) như ChatGPT hay Gemini. Thông qua việc so sánh và tinh chỉnh các mức độ prompt từ cơ bản đến nâng cao (như role prompting, chain-of-thought, và few-shot), sinh viên tối ưu hóa hiệu quả phản hồi của AI phục vụ đắc lực cho hoạt động tự học và nghiên cứu khoa học chuyên sâu.",
    shortDesc: "Ứng dụng các mức thiết kế prompt (Cơ bản, Cải tiến, Nâng cao) để giao tiếp và học thuật cùng AI.",
    iconName: "Terminal",
    image: "https://picsum.photos/seed/prompt/600/400",
    details: {
      objective: "Nghiên cứu nguyên lý hoạt động và nâng cao năng lực làm chủ kỹ nghệ thiết kế câu lệnh (Prompt Engineering) với các mô hình ngôn ngữ lớn (LLM) như ChatGPT hay Gemini. Thông qua việc so sánh và tinh chỉnh các mức độ prompt từ cơ bản đến nâng cao (như role prompting, chain-of-thought, và few-shot), sinh viên tối ưu hóa hiệu quả phản hồi của AI phục vụ đắc lực cho hoạt động tự học và nghiên cứu khoa học chuyên sâu.",
      process: [
        "Chọn 3 tác vụ học tập phổ biến: Tóm tắt một bài đọc/tài liệu học thuật, Giải thích một khái niệm phức tạp, Tạo bộ câu hỏi ôn tập cho một chủ đề.",
        "Cho mỗi tác vụ, viết 3 phiên bản prompt khác nhau: Prompt cơ bản (đơn giản, ngắn gọn), Prompt cải tiến (chi tiết hơn, có cấu trúc), Prompt nâng cao (áp dụng các kỹ thuật prompt engineering như role prompting, chain-of-thought, few-shot examples).",
        "Thử nghiệm các prompt với một công cụ AI (như ChatGPT hoặc Gemini) và so sánh kết quả.",
        "Phân tích lý do tại sao một số prompt hiệu quả hơn các prompt khác.",
        "Tổng hợp các nguyên tắc và mẹo viết prompt hiệu quả dựa trên kết quả thử nghiệm."
      ],
      evidenceDesc: "Bộ mẫu prompt đối sánh chi tiết, ghi nhận chênh lệch lớn giữa câu lệnh chung chung và câu lệnh định rõ ranh giới.",
      finalProduct: "Cẩm nang hướng dẫn cách tạo prompt học tập nâng cao, giúp tối ưu hóa khả năng phản hồi thông minh hữu ích từ AI.",
      googleDocsUrl: "https://docs.google.com/document/d/1tV-2KGnb1ZartuX-YeSk7oVMgQSnJPh26IV9USk36b0/edit?usp=drive_link"
    }
  },
  {
    id: 4,
    title: "Bài 4 - Bài tập 3 của mục 4.4: Sử dụng công cụ hợp tác trực tuyến cho dự án nhóm",
    objective: "Nâng cao năng lực làm việc nhóm phối hợp và quản trị dự án trực tuyến trong kỷ nguyên số bằng các công cụ hiện đại như Trello (bảng Kanban), Google Docs và Google Drive. Sinh viên không chỉ thành thạo việc lưu trữ, soạn thảo đồng bộ mà còn chứng minh được năng lực điều phối, tự quản lý công việc cá nhân, phân cấp trách nhiệm và giao tiếp học thuật hiệu quả trong môi trường mạng.",
    shortDesc: "Ứng dụng 3 công cụ (Trello/Google Drive/Google Docs) để tăng cường truyền thông và đồng bộ hóa tiến độ nhóm.",
    iconName: "Users",
    image: "https://picsum.photos/seed/collab/600/400",
    details: {
      objective: "Nâng cao năng lực làm việc nhóm phối hợp và quản trị dự án trực tuyến trong kỷ nguyên số bằng các công cụ hiện đại như Trello (bảng Kanban), Google Docs và Google Drive. Sinh viên không chỉ thành thạo việc lưu trữ, soạn thảo đồng bộ mà còn chứng minh được năng lực điều phối, tự quản lý công việc cá nhân, phân cấp trách nhiệm và giao tiếp học thuật hiệu quả trong môi trường mạng.",
      process: [
        "Bối cảnh: Làm việc cùng nhóm của bạn để thực hiện một dự án nhỏ. Tuy nhiên, bài nộp này sẽ tập trung vào vai trò và trải nghiệm cá nhân của bạn trong quá trình đó.",
        "Lựa chọn công cụ: Cá nhân phải tham gia thiết lập/sử dụng ít nhất 3 công cụ hợp tác trực tuyến từ các nhóm: Quản lý dự án (Trello, Asana, ClickUp, hoặc Microsoft Planner...), soạn thảo tài liệu cộng tác (Google Docs, Microsoft Office Online...), lưu trữ và chia sẻ tệp (Google Drive, OneDrive, Dropbox...), công cụ giao tiếp nhóm (Slack, Discord, Microsoft Teams...).",
        "Thực hiện nhiệm vụ cá nhân: Trong 1 tuần thực hiện dự án, cá nhân phải minh chứng được các hoạt động: tự quản lý danh sách nhiệm vụ được giao trên công cụ quản lý, lịch sử chỉnh sửa, đóng góp nội dung trực tiếp trên tài liệu cộng tác, tương tác, thảo luận chủ động với các thành viên khác trên công cụ giao tiếp, tổ chức và lưu trữ các tệp tin cá nhân phụ trách một cách khoa học.",
        "Nhật ký minh chứng: Ghi lại quá trình cá nhân sử dụng các công cụ, bao gồm ảnh chụp màn hình thể hiện rõ tên tài khoản hoặc phần đóng góp của cá nhân."
      ],
      evidenceDesc: "Lịch sử đóng góp trên Google Docs và quản trị phân quyền bảng Kanban của Trello chứng thực đóng góp cá nhân năng động.",
      finalProduct: "Nhật ký số hóa trải nghiệm điều phối nhóm trực ban chuyên nghiệp, thúc đẩy môi trường cộng tác văn minh hiệu suất.",
      googleDocsUrl: "https://docs.google.com/document/d/1a875eG5D_5TvfC94keVisvIz5wkglEF07VDb7oJ1ius/edit?usp=drive_link"
    }
  },
  {
    id: 5,
    title: "Bài 5 - Bài tập 2 của mục 5.4: Sử dụng AI tạo sinh để hỗ trợ sáng tạo nội dung",
    objective: "Khai phá và làm chủ sức mạnh của công nghệ AI tạo sinh đa phương tiện (Generative AI) bao gồm các công cụ tạo văn bản, tạo hình ảnh và thiết kế đồ họa như ChatGPT, Midjourney hay Canva AI. Sinh viên ứng dụng linh hoạt các nền tảng này vào quy trình phác thảo ý tưởng, thiết kế Infographic trực quan sinh động về sinh học tế bào, đồng thời đánh giá phản biện về tiềm năng lẫn giới hạn đạo đức số trong truyền thông tri thức.",
    shortDesc: "Vận dụng GenAI đa dạng (ChatGPT, Midjourney, Canva) để phác họa và thiết kế nội dung đồ họa y sinh truyền thông.",
    iconName: "Sparkles",
    image: "https://picsum.photos/seed/content/600/400",
    details: {
      objective: "Khai phá và làm chủ sức mạnh của công nghệ AI tạo sinh đa phương tiện (Generative AI) bao gồm các công cụ tạo văn bản, tạo hình ảnh và thiết kế đồ họa như ChatGPT, Midjourney hay Canva AI. Sinh viên ứng dụng linh hoạt các nền tảng này vào quy trình phác thảo ý tưởng, thiết kế Infographic trực quan sinh động về sinh học tế bào, đồng thời đánh giá phản biện về tiềm năng lẫn giới hạn đạo đức số trong truyền thông tri thức.",
      process: [
        "Chọn một dự án sáng tạo nội dung (bài thuyết trình, bài viết, infographic, hoặc video ngắn).",
        "Sử dụng ít nhất 3 công cụ AI tạo sinh khác nhau để hỗ trợ quá trình sáng tạo: Công cụ AI tạo văn bản (ChatGPT, Google Gemini, Claude), Công cụ AI tạo hình ảnh (DALL-E, Midjourney, Stable Diffusion), Công cụ AI hỗ trợ thiết kế (Canva AI, Adobe Firefly).",
        "Ghi lại chi tiết quá trình sử dụng AI: Các prompt đã sử dụng và kết quả nhận được, cách bạn chỉnh sửa và tích hợp đầu ra của AI, so sánh kết quả từ các công cụ AI khác nhau.",
        "Hoàn thiện dự án bằng cách kết hợp đầu ra của AI với đóng góp sáng tạo của riêng bạn.",
        "Viết phân tích về vai trò của AI trong quá trình sáng tạo, bao gồm: Những phần AI làm tốt và những phần còn hạn chế, cách AI thay đổi quy trình sáng tạo của bạn, các vấn đề đạo đức cần cân nhắc."
      ],
      evidenceDesc: "Các bản thảo Infographic và bài văn phác thấu do AI hỗ trợ cùng so sánh đối chứng độ hiệu quả của từng nền tảng.",
      finalProduct: "Bài Infographic hoàn mỹ giới thiệu lịch sử phát minh DNA kết hợp hài hòa giữa bộ óc phản biện con người và năng lực phác họa của AI.",
      googleDocsUrl: "https://docs.google.com/document/d/1XNECBbL8Zgbj9duNug3sGQKO3EsmZ89uJmfWKUeGa5Q/edit?usp=drive_link"
    }
  },
  {
    id: 6,
    title: "Bài 6 - Bài tập 4 của mục 6.4: Sử dụng AI có trách nhiệm trong học tập và nghiên cứu",
    objective: "Xây dựng nền tảng tư duy phản biện sắc bén và nâng cao ý thức văn hóa số thông qua việc thực hành sử dụng Trí tuệ nhân tạo (AI) có trách nhiệm. Sinh viên tiệm cận các quy định pháp lý, bản quyền dữ liệu và liêm chính khoa học để thiết lập bộ nguyên tắc đạo đức cá nhân, cam kết duy trì trung thực học thuật và trích dẫn chuẩn hóa khi đồng hành cùng công nghệ thông minh.",
    shortDesc: "Nghiên cứu nguyên tắc Liêm chính học thuật và tạo dựng bộ quy tắc sử dụng AI cá nhân có trách nhiệm.",
    iconName: "ShieldAlert",
    image: "https://picsum.photos/seed/ethics/600/400",
    details: {
      objective: "Xây dựng nền tảng tư duy phản biện sắc bén và nâng cao ý thức văn hóa số thông qua việc thực hành sử dụng Trí tuệ nhân tạo (AI) có trách nhiệm. Sinh viên tiệm cận các quy định pháp lý, bản quyền dữ liệu và liêm chính khoa học để thiết lập bộ nguyên tắc đạo đức cá nhân, cam kết duy trì trung thực học thuật và trích dẫn chuẩn hóa khi đồng hành cùng công nghệ thông minh.",
      process: [
        "Nghiên cứu chính sách của trường đại học của bạn (hoặc một trường đại học lớn ở Việt Nam) về việc sử dụng AI trong học tập và nghiên cứu.",
        "Chọn một nhiệm vụ học tập (viết bài luận, chuẩn bị thuyết trình, tổng hợp tài liệu) và thực hiện với sự hỗ trợ của AI: Ghi lại các prompt đã sử dụng, ghi lại đầu ra của AI, mô tả cách bạn đánh giá, chỉnh sửa và tích hợp đầu ra của AI, trích dẫn việc sử dụng AI một cách minh bạch.",
        "Phân tích các vấn đề đạo đức liên quan đến việc sử dụng AI trong học thuật: Ranh giới giữa hỗ trợ hợp lý và gian lận học thuật, vấn đề về quyền sở hữu trí tuệ và trích dẫn, tác động đến quá trình học tập và phát triển kỹ năng.",
        "Xây dựng bộ nguyên tắc cá nhân (5-7 nguyên tắc) về cách sử dụng AI có trách nhiệm trong học tập.",
        "Tạo một infographic minh họa 'Sử dụng AI có trách nhiệm trong học thuật'."
      ],
      evidenceDesc: "Bộ nguyên tắc liêm chính học thuật của sinh viên Nguyễn Đức Huy kết hợp cùng sơ đồ ranh giới sử dụng AI an toàn bảo mật.",
      finalProduct: "Cẩm nang và Infographic minh họa cách ứng xử, trích nguồn minh bạch khi sử dụng AI trong môi trường đại học.",
      googleDocsUrl: "https://docs.google.com/document/d/1HyZ_bicq5WTApzdSEYGbddB8O6dqc1jrB9XaYYI1MCM/edit?usp=drive_link"
    }
  }
];

export const skills: Skill[] = [
  {
    name: "Kỹ năng tìm kiếm thông tin học thuật",
    level: 92,
    desc: "Thành thạo cấu trúc câu lệnh lọc Boolean nâng cao trên Google Scholar, PubMed, ResearchGate để truy tìm chính xác tài nguyên y sinh sâu.",
    icon: "SearchCode"
  },
  {
    name: "Kỹ năng đánh giá học thuật (CRAAP)",
    level: 88,
    desc: "Độc lập kiểm định mức độ tin cậy của tài liệu khoa học theo thang chuẩn CRAAP, nhận diện nhanh các bài viết giả khoa học.",
    icon: "GraduationCap"
  },
  {
    name: "Kỹ năng Prompt Engineering nâng cao",
    level: 95,
    desc: "Làm chủ hầu hết các mô hình ngôn ngữ lớn (LLM) nhờ bộ mẫu Prompt đa ngữ cảnh: Prompt Few-Shot, Prompt Chain-of-Thought nhập vai.",
    icon: "Cpu"
  },
  {
    name: "Kỹ năng cộng tác trực tuyến hiện đại",
    level: 90,
    desc: "Vận hành thuần thục vòng đời tài liệu học tập của Google Workspace và công cụ quản trị dự án Trello, tối ưu hóa quy trình làm việc nhóm.",
    icon: "Workflow"
  },
  {
    name: "Kỹ năng sáng tạo trực quan bằng AI",
    level: 85,
    desc: "Chuyển hóa dữ liệu y sinh phức tạp thành Infographic truyền thông học thuật sinh động, sắc màu nhờ tư duy thiết kế Canva AI tốt.",
    icon: "Image"
  },
  {
    name: "Kỹ năng áp dụng AI liêm chính học thuật",
    level: 98,
    desc: "Áp dụng nghiêm túc quy chuẩn trích dẫn nguồn AI và bộ quy định Liêm chính khoa học của Đại học Quốc gia Hà Nội trong nghiên cứu.",
    icon: "ShieldCheck"
  }
];

export const highPoints = [
  {
    title: "Làm chủ bộ công cụ năng suất học thuật",
    desc: "Từ một tân sinh viên ban sơ, tôi đã biết cách hệ thống hóa dữ liệu chuyên môn, không còn nỗi lo thất lạc file hay trích dẫn sai định dạng APA/MLA."
  },
  {
    title: "Nâng cao năng lực phản biện trước AI",
    desc: "Hiểu sâu sắc rằng AI chỉ là người đồng hành thông tuệ nhưng có thể sai lầm. Kỹ năng kiểm tra chéo (Double check) với nguồn sách giáo khoa cổ điển giúp tôi luôn tự tin vào tri thức mình viết ra."
  },
  {
    title: "Phóng khoáng trong tư duy sáng tạo truyền thông",
    desc: "Nhận thức rằng nghiên cứu khoa học sự sống không chỉ nằm trong phòng thí nghiệm kín, mà cần được trực quan hóa lung linh để lan tỏa giá trị tốt đẹp đến xã hội học tập rộng lớn."
  }
];

export const challengesMet = [
  {
    title: "Sự phân tách và khối lượng thông tin khổng lồ",
    solution: "Ban đầu tôi bị ngập trong hàng ngàn bài báo khoa học di truyền. Việc học cách thu hẹp từ khóa và sử dụng AI thông thái để tóm tắt các đề mục (Abstract) đã cứu rỗi tiến trình tự học."
  },
  {
    title: "Ảo giác (Hallucination) từ các câu trả lời của AI",
    solution: "Gặp phải những liên kết bài báo 'ma' do AI tự chế. Nhờ bài học AI có trách nhiệm, tôi luôn đối chứng lại mã DOI hoặc tìm trực tiếp trên PubMed để xác nhận thực hư trước khi sử dụng."
  },
  {
    title: "Bất đồng ý kiến khi làm việc nhóm từ xa",
    solution: "Sử dụng lịch họp số rành mạch, phân chia vai trò cụ thể trên Google Sheets và áp dụng nguyên tắc biểu quyết theo năng lực đóng góp thực tế giúp nâng cao hiệu suất làm việc nhóm."
  }
];

export const futureApplication = "Với định hướng học vị chuyên sâu ngành Công nghệ sinh học và nghiên cứu khoa học phân tử, tôi cam kết sẽ liên tục bồi đắp và áp dụng bộ kỹ năng số này như một bệ phóng sắc bén. Tôi sẽ duy trì việc quản lý cấu trúc dữ liệu di truyền học của K70G-BE trên đám mây, sử dụng Prompt Engineering để tăng tốc dịch thuật và tóm tắt công trình quốc tế mới xuất bản, đồng thời ứng dụng nghiêm ngặt đạo đức Trí tuệ nhân tạo có văn hóa. Bộ kỹ năng số và tư duy AI có trách nhiệm này chính là hành trang nền tảng vững vàng nhất của tôi trên con đường học thuật tương lai.";
