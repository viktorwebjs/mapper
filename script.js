const BUSINESS_ENTITY_STATUSES = [
  {
    title: 'Not Validated',
    value: 'not_validated',
  },
  {
    title: 'Valid',
    value: 'validated',
  },
  {
    title: 'Validation Failed KYC',
    value: 'validation_failed_kyc',
  },
  {
    title: 'Validation Failed OFAC',
    value: 'validation_failed_ofac',
  },
  {
    title: 'Validation Failed Credit',
    value: 'validation_failed_credit',
  },
  {
    title: 'Validation Failed KYC Credit',
    value: 'validation_failed_kyc_credit',
  },
];

const PAYMENT_PLANS = [
  {
    id: 'gdh5h5151515h2t',
    planName: 'Standart',
  },
  {
    id: 'sth31srth5h11trsh',
    planName: 'Low',
  },
  {
    id: '5f515v1515f5',
    planName: 'Max',
  },
];

const businessEntities = [
  {
    city: 'Edmonton',
    createdAt: '2022-03-28T13:41:06Z',
    id: '51se5eg15ser153515es3rg',
    merchantId: '',
    name: 'Alex Inc',
    planId: 'gdh5h5151515h2t',
    state: 'US-AK',
    status: 'not_validated',
  },
  {
    city: 'Camptown',
    createdAt: '2022-03-28T13:41:06Z',
    id: 'srt3b881srt618618srt618t',
    merchantId: '',
    name: 'Alex Inc 2',
    planId: 'gdh5h5151515h2t',
    state: 'US-AK',
    status: 'validated',
  },
  {
    city: 'Chicago',
    createdAt: '2022-03-28T13:41:06Z',
    id: 'srth351srth15trh13',
    merchantId: '',
    name: 'Mego Inc',
    planId: '5f515v1515f5',
    state: 'US-AK',
    status: 'validation_failed_ofac',
  },
  {
    city: 'California',
    createdAt: '2022-03-28T13:41:06Z',
    id: 'srth7htsr1trsh424212strh',
    merchantId: '',
    name: 'Nick Inc',
    planId: '5f515v1515f5',
    state: 'US-AK',
    status: 'validated',
  },
];

const trTable = document.getElementById('trTable');

const filterArr = () => {
  for (let i = 0; i < businessEntities.length; i++) {
    const tdOne = document.createElement('td');
    const tdTwo = document.createElement('td');
    const tdThree = document.createElement('td');
    const tdFour = document.createElement('td');
    const tdFive = document.createElement('td');
    const tr = document.createElement('tr');
    let name = businessEntities[i].name;
    let location = businessEntities[i].city;
    let id = businessEntities[i].id;
    let status = BUSINESS_ENTITY_STATUSES.find(
      (e) => e.value === businessEntities[i].status
    ).title;
    let payment = PAYMENT_PLANS.find(
      (e) => e.id === businessEntities[i].planId
    ).planName;
    tdOne.innerText = name;
    tdTwo.innerText = location;
    tdThree.innerText = id;
    tdFour.innerText = status;
    tdFive.innerText = payment;
    tr.append(tdOne, tdTwo, tdThree, tdFour, tdFive);
    trTable.append(tr);
  }
};

filterArr();
