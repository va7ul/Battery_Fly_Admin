import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { getOneOrder, updateOneOrder } from './ordersOperations';

const initialState = {
  result: {
    _id: '660c0fe817a24c70c02f36a3',
    status: 'Нове',
    numberOfOrder: '100119',
    firstName: 'Vasyl',
    lastName: 'Podvirnyi',
    email: 'test@gmail.com',
    comment: '',
    tel: '+380962985515',
    total: 1016,
    promoCode: '',
    promoCodeDiscount: 10,
    discountValue: 102,
    together: 1016,
    cartItems: [
      {
        _id: '65eb734bfd80cd2e1934c7d4',
        codeOfGood: '1023',
        name: 'Аккумулятор LiFePo4 Eve, 3.2 V, 280 Ah, Original QR, Класс А',
        description:
          'Технические характеристики:;\nДиапазон напряжения: 3.65 до 2.5v;\nНоминальная мощность: 336;\nСтандартный ток заряда/разряда: 50;\nНоминальная емкость: 105Ah;\nКоличество циклов: 6000;\nКалендарный срок службы: 10р;\nМакс. ток заряда: 100;\nТехнические характеристики:;\nНоминальное напряжение: 3.2v;\nХимический состав: LiFePo4;\nРабочая температура: -20 до +55;',
        image: [
          'https://solar-markets.com.ua/content/images/20/1600x1600l80mc0/akumuliator-eve-lf105-3.2v-lifepo4-105ah-grade-a-99395432194422.webp',
          'https://solar-markets.com.ua/content/images/20/1600x1600l80mc0/akumuliator-eve-lf105-3.2v-lifepo4-105ah-grade-a-69858918853059.webp',
          'https://solar-markets.com.ua/content/images/20/1600x1600l80mc0/akumuliator-eve-lf105-3.2v-lifepo4-105ah-grade-a-77021414939098.webp',
        ],
        price: 5100,
        quantity: 100,
        sale: false,
        popular: true,
        category: 'battery',
        type: 'lifepo4',
        information:
          'В нашем интернет-магазине теперь вы можете приобрести надежный аккумулятор EVE LF105 для сбора аккумуляторных батарей. Эта качественная аккумуляторная ячейка предлагает вам высокую емкость – 105 Ач, а также надежную работу на длительный период благодаря сроку службы до 6000 циклов заряда/разряда;\n\nEVE LF105 обладает напряжением 3,2 В, что обеспечивает надежный и мощный источник питания для вашего устройства. Вы можете быстро заряжать аккумулятор и использовать его снова и снова благодаря быстрому заряду;\n\nКачество и надежность – это то, что делает EVE LF105 идеальным выбором для сбора аккумуляторных батарей. Он позволяет создавать мощные и надежные аккумуляторы, которые будут служить вам длительное время;\n\nИтак, не упустите возможность приобрести EVE LF105 - надежный и мощный источник питания для вашего устройства. Заказывайте прямо сейчас в нашем интернет-магазине.',
        createdAt: '2024-03-08T20:21:31.459Z',
        updatedAt: '2024-03-08T20:21:31.459Z',
        discount: 10,
        capacityKey: '',
        selectedSealing: false,
        selectedHolder: false,
        quantityOrdered: 3,
        totalPrice: 15300,
      },
      {
        _id: '65eb732afd80cd2e1934c7cc',
        codeOfGood: '1021',
        name: 'Акумулятор 32700 LiFePO4 Lii-70A 7000 мАч 30A 3.2V PVC 1 шт Blue',
        description:
          'Ємність: 7000мАг;\nНапруга: 3.2В;\nМаксимальна напруга (повністю заряджений): 3.6В;\nМінімальна напруга (повністю розряджений): 2.2В;\nМаксимальний струм розряду: 10А;\nДовжина: 65мм;\nДіаметр: 18.3мм;\nВага: 49г.',
        image: [
          'https://content2.rozetka.com.ua/goods/images/big/383379214.jpg',
        ],
        price: 333,
        quantity: 100,
        sale: true,
        popular: true,
        category: 'battery',
        type: '32650',
        information: 'Test',
        createdAt: '2024-03-08T20:20:58.200Z',
        updatedAt: '2024-03-08T20:20:58.200Z',
        discount: 10,
        capacityKey: '',
        selectedSealing: false,
        selectedHolder: false,
        quantityOrdered: 1,
        totalPrice: 333,
      },
      {
        _id: '65eb7361fd80cd2e1934c7d8',
        codeOfGood: '1024',
        name: 'Акумулятор CNHL 1300mAh 4S 100C (Black Series)',
        description:
          'Ємність: 1300мАг;\nНапруга: 4S1P/14.8В;\nСтрум розряду: 100C постійний/200C піковий;\nБалансувальний роз’єм: JST-XH (мама);\nСиловий роз’єм: XT60 (мама);\nРозміри: 75x34.5x34мм;\nВага: 163г (включаючи дроти і роз’єми)',
        image: ['https://hobbymania.com.ua/img/img_medium/7516_250_1.jpg'],
        price: 683,
        quantity: 5,
        sale: true,
        popular: true,
        category: 'battery',
        type: 'li-po',
        information: 'Test',
        createdAt: '2024-03-08T20:21:53.927Z',
        updatedAt: '2024-03-08T20:21:53.927Z',
        discount: 10,
        capacityKey: '',
        selectedSealing: false,
        selectedHolder: false,
        quantityOrdered: 1,
        totalPrice: 683,
      },
      {
        _id: '65eb72adfd80cd2e1934c7b0',
        codeOfGood: '1014',
        name: 'Акумулятор Panasonic NCR 18650 3400мАг',
        description:
          'Ємність: 3400мАг;\nНапруга: 3.7В;\nМаксимальна напруга (повністю заряджений): 4.1В;\nМінімальна напруга (повністю розряджений): 2.5В;\nМаксимальний струм розряду: 8А;\nДовжина: 65мм;\nДіаметр: 18.4мм;\nВага: 49г.',
        image: ['https://hobbymania.com.ua/img/img_medium/6548_250_1.jpg'],
        price: 150,
        quantity: 100,
        sale: false,
        popular: true,
        category: 'battery',
        type: '18650',
        information: 'Test',
        createdAt: '2024-03-08T20:18:53.532Z',
        updatedAt: '2024-03-08T20:18:53.532Z',
        discount: 10,
        capacityKey: '',
        selectedSealing: false,
        selectedHolder: false,
        quantityOrdered: 1,
        totalPrice: 150,
      },
      {
        _id: '65eb733afd80cd2e1934c7d0',
        codeOfGood: '1022',
        name: 'АККУМУЛЯТОР EVE LF105 3.2V LIFEPO4 105AH GRADE A',
        description:
          'Технические характеристики:;\nДиапазон напряжения: 3.65 до 2.5;\nНоминальная мощность: 336;\nСтандартный ток заряда/разряда: 50A;\nНоминальная емкость: 105;\nКоличество циклов: 6000;\nКалендарный срок службы: 10;\nМакс. ток заряда: 100;\nТехнические характеристики:;\nНоминальное напряжение: 3.2v;\nХимический состав: LiFePo4;\nРабочая температура: -20 до +55',
        image: [
          'https://solar-markets.com.ua/content/images/20/1600x1600l80mc0/akumuliator-eve-lf105-3.2v-lifepo4-105ah-grade-a-99395432194422.webp',
          'https://solar-markets.com.ua/content/images/20/1600x1600l80mc0/akumuliator-eve-lf105-3.2v-lifepo4-105ah-grade-a-69858918853059.webp',
          'https://solar-markets.com.ua/content/images/20/1600x1600l80mc0/akumuliator-eve-lf105-3.2v-lifepo4-105ah-grade-a-77021414939098.webp',
        ],
        price: 1950,
        quantity: 100,
        sale: false,
        popular: true,
        category: 'battery',
        type: 'lifepo4',
        information:
          'В нашем интернет-магазине теперь вы можете приобрести надежный аккумулятор EVE LF105 для сбора аккумуляторных батарей. Эта качественная аккумуляторная ячейка предлагает вам высокую емкость – 105 Ач, а также надежную работу на длительный период благодаря сроку службы до 6000 циклов заряда/разряда;\n\nEVE LF105 обладает напряжением 3,2 В, что обеспечивает надежный и мощный источник питания для вашего устройства. Вы можете быстро заряжать аккумулятор и использовать его снова и снова благодаря быстрому заряду;\n\nКачество и надежность – это то, что делает EVE LF105 идеальным выбором для сбора аккумуляторных батарей. Он позволяет создавать мощные и надежные аккумуляторы, которые будут служить вам длительное время;\n\nИтак, не упустите возможность приобрести EVE LF105 - надежный и мощный источник питания для вашего устройства. Заказывайте прямо сейчас в нашем интернет-магазине.',
        createdAt: '2024-03-08T20:21:14.278Z',
        updatedAt: '2024-03-08T20:21:14.278Z',
        discount: 10,
        capacityKey: '',
        selectedSealing: false,
        selectedHolder: false,
        quantityOrdered: 1,
        totalPrice: 1950,
      },
      {
        _id: '65eb7376fd80cd2e1934c7dc',
        codeOfGood: '1025',
        name: 'Акумулятор CNHL 1500mAh 4S 100C (Black Series)',
        description:
          'Ємність: 1500мАг;\nНапруга: 4S1P/14.8В;\nСтрум розряду: 100C постійний/200C піковий;\nБалансувальний роз’єм: JST-XH (мама);\nСиловий роз’єм: XT60 (мама);\nРозміри: 75x35x37мм;\nВага: 185г (включаючи дроти і роз’єми)',
        image: [
          'https://hobbymania.com.ua/img/img_full/5446_1.jpg',
          'https://hobbymania.com.ua/img/img_full/5446_2.jpg',
          'https://hobbymania.com.ua/img/img_full/5446_3.jpg',
        ],
        price: 714,
        quantity: 100,
        sale: false,
        popular: true,
        category: 'battery',
        type: 'li-po',
        information: 'Test',
        createdAt: '2024-03-08T20:22:14.632Z',
        updatedAt: '2024-03-08T20:22:14.632Z',
        discount: 10,
        capacityKey: '',
        selectedSealing: false,
        selectedHolder: false,
        quantityOrdered: 1,
        totalPrice: 714,
      },
      {
        _id: '65eb72c0fd80cd2e1934c7b4',
        codeOfGood: '1015',
        name: 'Акумулятор Sanyo NCR 18650-GA 3500мАг',
        description:
          'Ємність: 3500мАг;\nНапруга: 3.7В;\nМаксимальна напруга (повністю заряджений): 4.2В;\nМінімальна напруга (повністю розряджений): 2.5В;\nМаксимальний струм розряду: 10А;\nДовжина: 65мм;\nДіаметр: 18.3мм;\nВага: 49г.',
        image: ['https://hobbymania.com.ua/img/img_medium/7385_250_1.jpg'],
        price: 126,
        quantity: 100,
        sale: true,
        popular: false,
        category: 'battery',
        type: '18650',
        information: 'Test',
        createdAt: '2024-03-08T20:19:12.032Z',
        updatedAt: '2024-03-08T20:19:12.032Z',
        discount: 10,
        capacityKey: '',
        selectedSealing: false,
        selectedHolder: false,
        quantityOrdered: 1,
        totalPrice: 126,
      },
      {
        _id: '65eb731bfd80cd2e1934c7c8',
        codeOfGood: '1020',
        name: 'Акумулятор LiitoKala 32700 LiFePO4 Lii-70A 7000 мАч 30A 3.2V PVC 1 шт Blue',
        description:
          'Ємність: 7000мАг;\nНапруга: 3.2В;\nМаксимальна напруга (повністю заряджений): 3.6В;\nМінімальна напруга (повністю розряджений): 2.2В;\nМаксимальний струм розряду: 10А;\nДовжина: 65мм;\nДіаметр: 18.3мм;\nВага: 49г.',
        image: [
          'https://content1.rozetka.com.ua/goods/images/big/295726021.png',
        ],
        price: 315,
        quantity: 100,
        sale: true,
        popular: false,
        category: 'battery',
        type: '32650',
        information: 'Test',
        createdAt: '2024-03-08T20:20:43.192Z',
        updatedAt: '2024-03-08T20:20:43.192Z',
        discount: 10,
        capacityKey: '',
        selectedSealing: false,
        selectedHolder: false,
        quantityOrdered: 1,
        totalPrice: 315,
      },
      {
        _id: '65eb7298fd80cd2e1934c7ac',
        codeOfGood: '1013',
        name: 'Акумулятор Molicel INR21700-P42A 45A 4200мАг',
        description:
          'Ємність: 4200мАг;\nНапруга: 3.6В;\nМаксимальна напруга (повністю заряджений): 4.2В;\nМінімальна напруга (повністю розряджений): 2.5В;\nМаксимальний струм розряду: 45А (11С);\nМаксимальний струм заряду: 4.2А (1С);\nДовжина: 70.15мм;\nДіаметр: 21.55мм;\nВага: 67г.',
        image: ['https://hobbymania.com.ua/img/img_medium/7675_250_1.jpg'],
        price: 198,
        quantity: 100,
        sale: true,
        popular: false,
        category: 'battery',
        type: '21700',
        information:
          'Аккумулятор 21700 Molicel INR21700-P42A - промышленный вариант литий-ионных аккумуляторных ячеек, готовый для сборки в батареи в соответствии с поставленными задачами. Данные аккумуляторные ячейки имеют формфактор 21700, что позволяет гибко набирать любую конфигурацию батареи, при этом экономно расходовать пространство выделенного под аккумулятор отсека. Высокая токоотдача элементов позволяет применять их в нагруженных системах, таких как электротранспорт, радиооборудование, мощные системы резервирования питания и прочие, где нужно иметь высокую перегрузочную способность;\n\nВажно заметить, что данные аккумуляторы - промышленного стандарта изготовления. Из систем защиты они имеют только внутренний предохранительный клапан, отключающий аккумулятор (при повышении внутреннего давления от испарения электролита или перегрева аккумулятора). Выполнение остальных требований к сохранению безопасных пределов режимов аккумулятора возлагается на внешнюю систему мониторинга батареи, без которой использовать аккумулятор небезопасно. Также стоит учесть, что данные аккумуляторы не рассчитаны на прямое использование их в потребительской электронике, т. к. не имеют выпуклого плюсового контакта и предполагают использование контактной сварки для соединения элементов батареи и подключения выводных шин. Пайка аккумуляторов - запрещена, т. к. из-за длительного нагрева аккумулятора возможен тепловой разгон батареи и её возгорание, а также из-за нагрева идёт ускорение деградации пластин аккумулятора. Таким образом безопасность применения данных аккумуляторов зависит исключительно от обеспечения соблюдения выполнения нормативов, указанных в техническом паспорте, путём применения соответствующих инженерных решений и методик сборщиком батареи, а также выполнением мер предосторожности пользователем устройства, содержащего литий-ионные аккумуляторы.',
        createdAt: '2024-03-08T20:18:32.910Z',
        updatedAt: '2024-03-08T20:18:32.910Z',
        discount: 10,
        capacityKey: '',
        selectedSealing: false,
        selectedHolder: false,
        quantityOrdered: 1,
        totalPrice: 198,
      },
      {
        _id: '65eb6ffcfd80cd2e1934c788',
        codeOfGood: '1004',
        name: 'Літієва батарея 36 Вольт (в термонасадці)',
        description:
          'Хімія та тип акумулятора: Samsung INR18650;\nКількість циклів розряд-заряд: 1500 раз ( 4 років експлуатації, якщо використовувати один цикл в день);\nНомінальна напруга: 37 V;\nМаксимальна напруга (заряд 100%): 42 V;\nМінімальна напруга (заряд 5%) відключення розряду: 30 V;\nМетод заряджання CC/CV;\nТемпературний діапазон при зарядці 0 – 50°С;\nДіапазон робочої температури -20+50°C;\nКорпус: пластмасові тримачі елементів, статико-захисний папір, текстоліт, пластик;\nКабель для розряду з роз’ємом XT60 (зворотній в комплекті);\nКабель для зарядки DC 5.5×2.1mm;\nСиметрична плата БМС: без різниці якими з присутніх кабелем ви будете заряджати чи розряджати акумулятор, розряд-заряд може відбуватися одним каналом;\nГарантія 36 місяців. Ми в певнені в якості нашого товару;\nКраїна виробник: Україна',
        image: [
          'https://quantum-energy.ua/wp-content/uploads/2023/12/DSC_0191-1-1024x657.jpg',
        ],
        price: 6000,
        quantity: 5,
        sale: false,
        popular: true,
        category: 'transport',
        capacity: {
          9: {
            description:
              'Ємність енергії: 9 Ампер годин;\nСтрум розряду: 20 А;\nПіковий струм 3 секунди: 30 А;\nСтрум зарядки: 5 А;\nВага: 370 г;\nРозмір: хх мм;\n(можна зібрати акумулятор під ваші розміри, уточніть розміри при оформленні замовлення у вкладці “нотатки до замовлення”)',
            price: 4100,
            holder: 30,
          },
          12: {
            description:
              'Ємність енергії: 12 Ампер годин;\nСтрум розряду: 20 А;\nПіковий струм 3 секунди: 30 А;\nСтрум зарядки: 5 А;\nВага: 370 г;\nРозмір: хх мм;\n(можна зібрати акумулятор під ваші розміри, уточніть розміри при оформленні замовлення у вкладці “нотатки до замовлення”)',
            price: 5000,
            holder: 40,
          },
          15: {
            description:
              'Ємність енергії: 15 Ампер годин;\nСтрум розряду: 20 А;\nПіковий струм 3 секунди: 30 А;\nСтрум зарядки: 5 А;\nВага: 370 г;\nРозмір: хх мм;\n(можна зібрати акумулятор під ваші розміри, уточніть розміри при оформленні замовлення у вкладці “нотатки до замовлення”)',
            price: 5800,
            holder: 50,
          },
          18: {
            description:
              'Ємність енергії: 18 Ампер годин;\nСтрум розряду: 20 А;\nПіковий струм 3 секунди: 30 А;\nСтрум зарядки: 5 А;\nВага: 370 г;\nРозмір: хх мм;\n(можна зібрати акумулятор під ваші розміри, уточніть розміри при оформленні замовлення у вкладці “нотатки до замовлення”)',
            price: 6600,
            holder: 60,
          },
          21: {
            description:
              'Ємність енергії: 21 Ампер годин;\nСтрум розряду: 20 А;\nПіковий струм 3 секунди: 30 А;\nСтрум зарядки: 5 А;\nВага: 370 г;\nРозмір: хх мм;\n(можна зібрати акумулятор під ваші розміри, уточніть розміри при оформленні замовлення у вкладці “нотатки до замовлення”)',
            price: 7400,
            holder: 70,
          },
          24: {
            description:
              'Ємність енергії: 24 Ампер годин;\nСтрум розряду: 30 А;\nПіковий струм 3 секунди: 40 А;\nСтрум зарядки: 10 А;\nВага: 370 г;\nРозмір: хх мм;\n(можна зібрати акумулятор під ваші розміри, уточніть розміри при оформленні замовлення у вкладці “нотатки до замовлення”)',
            price: 8700,
            holder: 80,
          },
          29: {
            description:
              'Ємність енергії: 29 Ампер годин;\nСтрум розряду: 30 А;\nПіковий струм 3 секунди: 40 А;\nСтрум зарядки: 10 А;\nВага: 370 г;\nРозмір: хх мм;\n(можна зібрати акумулятор під ваші розміри, уточніть розміри при оформленні замовлення у вкладці “нотатки до замовлення”)',
            price: 9500,
            holder: 90,
          },
        },
        holder: true,
        information:
          "Літієвий акумулятор для електровелосипеда 36V збирається в термоусадку, що дозволило зробити його максимально компактним. Для розміщення батареї на велосипеді необхідно використовувати сумку або міцний корпус. На замовлення розмір сторін акумулятора можна змінити. Батарея має роз'єм XT60 для підключення до контролера та роз'єм для зарядки.;\n\nБатарея збирається на оригінальних елементах, з використанням електронної плати контролю BMS, яка захищає акумулятор від короткого замикання та стежить за рівнем заряду на кожному осередку. При розряді плата вимикає літієвий акумулятор, якщо рівень розряду будь-якого з осередків опускається до 2.8 Вольта. При заряді плата вимикає акумулятор, коли рівень напруги на комірці сягає 4.2 Вольта. Термін служби літій-іонного акумулятора становить близько 4-5 років.;\n\nТемпература експлуатації літієвого акумулятора від -20 до +40°. Максимальну ємність акумулятор видає за температури +25 С°. При температурах нижче, ємність та пробіг електровелосипеда зменшуються. При температурі -10° ємність становить близько 70% від максимальної. У режимі зберігання, коли акумулятор не використовується місяць і більше, рекомендується зберігати його наполовину розрядженим в сухому прохолодному місці.;\n\nВ опціях товару можна укомплектувати акумулятор зарядним пристроєм та сумкою. Заряджайте акумулятор при температурах не нижче +10 і не вище +35 °С. Недотримання цієї рекомендації може призвести до різкої втрати ємності акумулятора. Також, не рекомендується повністю розряджати акумулятор, це призводить до прискореного зношування батареї. Тому акумулятор можна заряджати не чекаючи повного розряду.",
        createdAt: '2024-03-08T20:07:24.936Z',
        updatedAt: '2024-03-08T20:07:24.936Z',
        discount: 10,
        priceOneProduct: 5800,
        capacityKey: '15',
        selectedSealing: true,
        selectedHolder: true,
        quantityOrdered: 1,
        totalPrice: 6000,
      },
    ],
    deliveryType: 'Нова пошта',
    city: 'Ворзель',
    warehouse: 'Відділення №2 (до 10 кг): вул. Курортна, 23а',
    payment: 'Картою по реквізитах фізичних осіб',
    createdAt: '2024-04-02T14:02:16.429+00:00',
  },

  isLoading: false,
  error: null,
};

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.error = null;
  state.result = action.payload.result;
};

const oneOrderSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    increaseQuantity(state, action) {
      const {
        codeOfGood,
        capacityKey,
        selectedSealing,
        selectedHolder,
        price,
        quantity,
      } = action.payload;

      const findingIndex = state.result.cartItems.findIndex(
        item =>
          item.codeOfGood === codeOfGood &&
          item.capacityKey === capacityKey &&
          item.selectedSealing === selectedSealing &&
          item.selectedHolder === selectedHolder
      );

      if (state.result.cartItems[findingIndex].quantityOrdered < quantity) {
        state.result.cartItems[findingIndex].quantityOrdered += 1;
        state.result.cartItems[findingIndex].totalPrice += price;
        state.result.total += price;

        if (!state.result.cartItems[findingIndex].sale) {
          state.result.discountValue += price;
        }
      }
    },

    decreaseQuantity(state, action) {
      const {
        codeOfGood,
        capacityKey,
        selectedSealing,
        selectedHolder,
        price,
      } = action.payload;

      const findingIndex = state.result.cartItems.findIndex(
        item =>
          item.codeOfGood === codeOfGood &&
          item.capacityKey === capacityKey &&
          item.selectedSealing === selectedSealing &&
          item.selectedHolder === selectedHolder
      );

      if (state.result.cartItems[findingIndex].quantityOrdered > 1) {
        state.result.cartItems[findingIndex].quantityOrdered -= 1;
        state.result.cartItems[findingIndex].totalPrice -= price;
        state.result.total -= price;
      }
    },

    deleteItem(state, action) {
      const {
        totalPrice,
        codeOfGood,
        capacityKey,
        selectedSealing,
        selectedHolder,
      } = action.payload;

      const findingIndex = state.result.cartItems.findIndex(
        item =>
          item.codeOfGood === codeOfGood &&
          item.capacityKey === capacityKey &&
          item.selectedSealing === selectedSealing &&
          item.selectedHolder === selectedHolder
      );

      if (state.result.cartItems.length === 1) {
        return;
      } else {
        state.result.total -= totalPrice;
        state.result.cartItems.splice(findingIndex, 1);
      }
    },

    changeDiscount(state, { payload }) {
      state.discountValue = payload;
    },

    changeTogether(state, { payload }) {
      state.together = payload;
    },
  },
  extraReducers: builder =>
    builder
      .addMatcher(
        isAnyOf(getOneOrder.pending, updateOneOrder.pending),
        handlePending
      )
      .addMatcher(
        isAnyOf(getOneOrder.rejected, updateOneOrder.rejected),
        handleRejected
      )
      .addMatcher(
        isAnyOf(getOneOrder.fulfilled, updateOneOrder.fulfilled),
        handleFulfilled
      ),
});

export const {
  increaseQuantity,
  decreaseQuantity,
  deleteItem,
  changeDiscount,
  changeTogether,
} = oneOrderSlice.actions;
export const oneOrderReducer = oneOrderSlice.reducer;
