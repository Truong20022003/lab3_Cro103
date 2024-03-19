import {View, Text} from 'react-native';
import React, {useState} from 'react';

const datas = [
  {
    id: '1',
    name: 'Lẩu mắm',
    url: 'https://file.hstatic.net/1000054905/file/lau-mam-mien-tay_7f06645c5f8344bf939a734afba04482.jpg',
  },
  {
    id: '2',
    name: 'Lẩu cá linh',
    url: 'https://file.hstatic.net/1000054905/file/lau-ca-linh-mien-tay_b4cbf04b537147a7aefc3c5ef6ccc3dd.jpg',
  },
  {
    id: '3',
    name: 'Bún mắm ',
    url: 'https://file.hstatic.net/1000054905/file/bun-mam-mien-tay_6c2e7786dc374bfea7da2eb05b8404b8.jpg',
  },
  {
    id: '4',
    name: 'Bún cá',
    url: 'https://file.hstatic.net/1000054905/file/bun-ca-mien-tay_3c88d795bd2c4e6da8e600e22540bfea.jpg',
  },
  {
    id: '5',
    name: 'Gà hấp rượu',
    url: 'https://file.hstatic.net/1000054905/file/ga-hap-mien-tay_1e1db4c3821347a499c2fd50a6ad7fe9.jpg',
  },
  {
    id: '6',
    name: 'Cháo cá',
    url: 'https://file.hstatic.net/1000054905/file/long-an-chao-ca-loc_2e6f80a42f10428db7f5ba96cf20c1b3.jpg',
  },
  {
    id: '7',
    name: 'Bò tùng xẻo',
    url: 'https://file.hstatic.net/1000054905/file/bo-tung-xeo-mien-tay_763214a5a4f84d9a81933540b5c62bc3.jpg',
  },
  {
    id: '8',
    name: 'Đuông dừa',
    url: 'https://file.hstatic.net/1000054905/file/du-lich-mien-tay__22__35f70d76e6fa4a6884fe8eef4bd87405.jpg',
  },
  {
    id: '9',
    name: 'Bánh xèo ',
    url: 'https://file.hstatic.net/1000054905/file/banh-xeo-ngon_178e5b652a034c7ca1aadefc36085170.jpg',
  },
  {
    id: '10',
    name: 'Bún Thang',
    url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/bun-thang-mon-an-ngon-o-ha-noi.jpg',
  },
  {
    id: '11',
    name: 'Bún Ốc',
    url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/bun-oc-mon-an-ngon-o-ha-noi.jpg',
  },
  {
    id: '12',
    name: 'Cốm Làng Vòng',
    url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/com-lang-vong-mon-an-ngon-o-ha-noi.jpg',
  },
  {
    id: '13',
    name: 'Bánh mỳ',
    url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/banh-mi-25-mon-an-ngon-o-ha-noi.jpg',
  },
  {
    id: '14',
    name: 'Bánh tôm Hồ Tây',
    url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/banh-tom-ho-tay-mon-an-ngon-o-ha-noi.jpg',
  },
  {
    id: '15',
    name: 'Cà phê Trứng',
    url: 'https://hotelcareers.vn/wp-content/uploads/2020/12/ca-phe-trung-mon-an-ngon-o-ha-noi.jpg',
  },
  {
    id: '16',
    name: 'Bánh Căn',
    url: 'https://datnenlagi.net/wp-content/uploads/2022/06/foody-upload-api-foody-mobile-banh-can-ngon-jpg-180309160642.jpg',
  },
  {
    id: '17',
    name: 'Gỏi cá mai Lagi ',
    url: 'https://datnenlagi.net/wp-content/uploads/2022/06/img20210506155503-16203176274411053318312-min-scaled.jpg',
  },
  {
    id: '18',
    name: 'Bún bò Huế',
    url: 'https://media.cooky.vn/recipe/g3/28487/s/recipe28487-prepare-step5-636577704586605195.jpg',
  },
  {
    id: '19',
    name: 'Hủ tiếu',
    url: 'https://media.cooky.vn/recipe/g1/1552/s/recipe1552-cook-step8-636875649012584632.jpg',
  },
];
// const [foodsale, setfoodsale] = useState([]);

export default datas;
