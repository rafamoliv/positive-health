const dashboardEn = {
  dashboardText: {
    title: 'Dashboard',
    cards: {
      dailySchedules: {
        title: 'Daily schedules'
      },
      dailyRevenue: {
        title: 'Daily revenue'
      },
      monthlyRevenue: {
        title: 'Monthly revenue'
      },
      analytics: {
        title: 'Analytics',
        positive: 'Positive review',
        negative: 'Negative review'
      },
      patientStatistics: {
        title: 'Patient Statistics'
      },
      patientApplication: {
        title: 'Patient Application',
        btn: 'View profile'
      }
    },
    modal: {
      title: 'Patient'
    },
    toast: {
      time: '{{value}} mins ago'
    },
    charts: {
      doughtnut: {
        labels: ['Scheduled', 'Treated']
      },
      line: {
        labels: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        legend: ['Scheduled', 'Consulted']
      },
      pie: {
        labels: ['Credit Card', 'Billet', 'Cash']
      },
      verticalBar: {
        labels: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec'
        ],
        legend: ['Revenue US$', 'Target US$']
      }
    }
  }
}

export default dashboardEn
