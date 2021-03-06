import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { UserService } from '../user.service';
import { firestore } from 'firebase/app'

@Component({
  selector: 'app-post',
  templateUrl: './post.page.html',
  styleUrls: ['./post.page.scss'],
})
export class PostPage implements OnInit {

  heartType: String = "heart-outline"
  postID: String
  post
  effect: string
  postReference: AngularFirestoreDocument
  sub


  constructor(
    private route: ActivatedRoute,
    private afs: AngularFirestore,
    private user: UserService
     ) {
   }

  ngOnInit() {
    this.postID = this.route.snapshot.paramMap.get('id')
    this.postReference = this.afs.doc(`posts/${this.postID}`)
    this.sub = this.postReference.valueChanges().subscribe(val => {
        this.post = val
        this.effect = val.effect
        this.heartType = val.likes.includes(this.user.getUID()) ? 'heart' : 'heart-outline'
    })
  }

  ngOnDestroy(){
    this.sub.unsubscribe()
  }

  toggleHeart() {
		if(this.heartType == 'heart-outline') {
			this.postReference.update({
				likes: firestore.FieldValue.arrayUnion(this.user.getUID())
			})
		} else {
			this.postReference.update({
				likes: firestore.FieldValue.arrayRemove(this.user.getUID())
			})
		}
	}











}
