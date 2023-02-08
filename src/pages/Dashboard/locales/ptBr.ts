const dashboardPtBr = {
  dashboardText: {
    title: 'Painel',
    cards: {
      dailySchedules: {
        title: 'Agenda diária'
      },
      dailyRevenue: {
        title: 'Receita diários'
      },
      monthlyRevenue: {
        title: 'Receita mensal'
      },
      analytics: {
        title: 'Análise',
        positive: 'Review positivo',
        negative: 'Review negativo'
      },
      patientStatistics: {
        title: 'Estatísticas de pacientes'
      },
      patientApplication: {
        title: 'Pacientes agendados',
        btn: 'Ver perfil'
      }
    },
    modal: {
      title: 'Paciente',
      fullname: 'Nome completo',
      email: 'Email',
      address: 'Endereço',
      gender: 'Gênero',
      plan: 'Plano',
      plans: ['Gratuito', 'Básico', 'Empresarial']
    },
    toast: {
      time: '{{value}} minutos atrás'
    },
    charts: {
      doughtnut: {
        labels: ['Agendados', 'Consultados']
      },
      line: {
        labels: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        legend: ['Agendados', 'Consultados']
      },
      pie: {
        labels: ['Cartão', 'Boleto', 'Dinheiro']
      },
      verticalBar: {
        labels: [
          'Jan',
          'Fev',
          'Mar',
          'Abr',
          'Mai',
          'Jun',
          'Jul',
          'Ago',
          'Set',
          'Out',
          'Nov',
          'Dez'
        ],
        legend: ['Receita US$', 'Meta US$']
      }
    }
  }
}

export default dashboardPtBr
