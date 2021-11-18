const app = new Vue({
  el: '#app',

  data: {
    user: {
      name: 'Nome Utente',
      avatar: '_io'
    },

    contacts: [
      {
        name: 'Michele',
        avatar: '_1',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Hai portato a spasso il cane?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Ricordati di dargli da mangiare',
            status: 'sent'
          },
          {
            date: '10/01/2020 16:15:22',
            message: 'Tutto fatto!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Fabio',
        avatar: '_2',
        visible: true,
        messages: [
          {
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
          },
          {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received'
          },
          {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Samuele',
        avatar: '_3',
        visible: true,
        messages: [
          {
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
          },
          {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
          },
          {
            date: '28/03/2020 16:15:22',
            message: 'Ah scusa!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Luisa',
        avatar: '_4',
        visible: true,
        messages: [
          {
            date: '10/01/2020 15:30:55',
            message: 'Lo sai che ha aperto una nuova pizzeria?',
            status: 'sent'
          },
          {
            date: '10/01/2020 15:50:00',
            message: 'Si, ma preferirei andare al cinema',
            status: 'received'
          }
        ],
      },
      {
        name: 'Marco',
        avatar: '_5',
        visible: true,
        messages: [
          {
            date: '08/01/2020 11:30:22',
            message: 'Come va? Stai meglio?',
            status: 'sent'
          },
          {
            date: '08/01/2020 11:50:00',
            message: 'Si, mi sono ripreso!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Martina',
        avatar: '_6',
        visible: true,
        messages: [
          {
            date: '12/03/2020 18:15:10',
            message: 'Domani sera ci sei per una pizza?',
            status: 'received'
          },
          {
            date: '12/03/2020 18:20:10',
            message: 'No, non posso ma se ti va possiamo prenderci un caffè domani mattina',
            status: 'sent'
          }
        ],
      },
      {
        name: 'Giovanni',
        avatar: '_7',
        visible: true,
        messages: [
          {
            date: '05/02/2020 09:30:55',
            message: 'Tanti auguri!',
            status: 'sent'
          },
          {
            date: '05/02/2020 09:41:09',
            message: 'Grazie!',
            status: 'received'
          }
        ],
      },
      {
        name: 'Pietro',
        avatar: '_8',
        visible: true,
        messages: [
          {
            date: '05/02/2020 09:50:55',
            message: 'Ricordati di fare gli auguri a Giovanni',
            status: 'sent'
          },
          {
            date: '05/02/2020 10:02:30',
            message: 'Giusto! Stavo per dimenticarlo',
            status: 'received'
          }
        ],
      },
    ],

    activeContact: 0,

    newMessageText: '',

    searchString: ''
  },

  methods: {
    // funzione che prende inizio dell'ultimo messaggio e lo tronca se è troppo lungo
    getLastMessage(index){
      let lastMessage = this.contacts[index].messages[this.contacts[index].messages.length - 1].message;

      if(lastMessage.length > 30){
        lastMessage = lastMessage.substr(0, 30);
      };

      return lastMessage + ' ...';
    },  

    // funzione per data ultimo messaggio
    getLastDate(index){
      return this.contacts[index].messages[this.contacts[index].messages.length - 1].date;
    },

    // funzione che stampa nuovi messaggi scritti e invia risposta dopo 1 sec
    printNewMessage(){
      if(this.newMessageText.trim().length > 0){
        const newMessage = {
          date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
          message: this.newMessageText,
          status: 'sent'
        };
  
        this.contacts[this.activeContact].messages.push(newMessage);
  
        this.newMessageText = '';
  
        setTimeout(() => {
          const responseMessage = {
            date: dayjs().format('DD/MM/YYYY HH:mm:ss'),
            message: 'ok',
            status: 'received'
          };
    
          this.contacts[this.activeContact].messages.push(responseMessage);
          
        }, 1000);

      };

    },

    // funzione che gestisce visibilità lista contatti quando faccio ricerca
    searchContact(){     
      this.contacts.forEach((contact) => {
        if(!contact.name.toLowerCase().includes(this.searchString.toLowerCase())){
          contact.visible = false;
        }else{
          contact.visible = true;
        }
      });
    },   
  },

});

dayjs.extend(window.dayjs_plugin_customParseFormat);

