import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { ContactListItem } from '../../components/contact-list-item/contact-list-item';
import { Contact, NewContact } from '../../interfaces/contact';
import { AuthService } from '../../services/auth-service';
import { ContactsService } from '../../services/contacts-service';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contacts-page',
  imports: [RouterModule,ContactListItem, FormsModule,],
  templateUrl: './contacts-page.html',
  styleUrl: './contacts-page.scss'
})

export class ContactsPage implements OnInit {
  authService = inject(AuthService);
  contactsService = inject(ContactsService);
  router = inject(Router);  
   ngOnInit(): void {
    this.contactsService.getContacts();
  }
  onEdit(id: number) {               
    this.router.navigate(['/contacts', id, 'edit']);
  }
  onDelete(id: number) {
  Swal.fire({
    title: "¿Desea borrar el contacto?",
    showDenyButton: true,
    showCancelButton: true,
    showConfirmButton: false,
    cancelButtonText: "Cancelar",
    denyButtonText: "Borrar definitivamente"
  }).then((result) => {
    if (result.isDenied) {
      this.contactsService.deleteContact(id);
    }
  });
}
}
