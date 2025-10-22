import { Component, inject, input, output } from '@angular/core';
import { Contact } from '../../interfaces/contact';
import { ContactsService } from '../../services/contacts-service';
import { RouterModule } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-contact-list-item',
  imports: [RouterModule,],
  templateUrl: './contact-list-item.html',
  styleUrl: './contact-list-item.scss',
  standalone: true,
})
export class ContactListItem {
  contact = input.required<Contact>()
  del = output<number>();
  edit = output<number>();
  aleatorio = Math.random()
  contactsService = inject(ContactsService)

openDeleteModal(){
Swal.fire({
  title: "¿Desea borrar el contacto?",
  showDenyButton: true,
  showCancelButton: true,
  showConfirmButton: false,
  cancelButtonText: "Cancelar",
  denyButtonText: `Borrar definitivamente`
}).then((result) => {
   if (result.isDenied) {
      this.contactsService.deleteContact(this.contact().id);
  }
});
}
}
