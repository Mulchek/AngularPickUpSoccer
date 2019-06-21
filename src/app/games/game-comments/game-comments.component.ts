import { Component, Input, OnInit } from '@angular/core';
import { Comment } from '../../models/comment.model';
import { GamesService } from '../../services/games.service';
import { UserService } from '../../services/user.service';
import {FormControl, FormGroup, Validators, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'game-comments',
  templateUrl: './game-comments.component.html'
})
export class GameComments implements OnInit{

    @Input() gameId: number;
    @Input() comments: Comment[];
    newCommentForm: FormGroup;
    
    constructor(private gamesService: GamesService, private userService: UserService){ }

    ngOnInit(){
        this.newCommentForm = new FormGroup({
            text: new FormControl('', [Validators.required])
        });
    }

    addComment(formDirective: FormGroupDirective){
        if (this.newCommentForm.valid){
            let userName = this.userService.getCurrentUserName();

            let newComment: Comment = {
                id: 1,
                text: this.newCommentForm.controls.text.value,
                dateCreated: new Date(),
                userName: userName
            }

            this.gamesService.addComment(this.gameId, newComment);

            formDirective.resetForm();
            this.newCommentForm.reset();
        }
    }
}
