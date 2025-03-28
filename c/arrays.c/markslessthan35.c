#include<stdio.h>
int main(){
    int marks[10] = { 68,89,90,34,39,78,25,99,98,22};
    for(int i = 0; i<10 ; i++){
        if( marks[i] < 35) printf("%d ",i);
    }
    return 0;
}