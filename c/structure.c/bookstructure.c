#include<stdio.h>
#include<string.h>
int main(){
    struct book{
        char name[77];
        int noOfpage;
        float price;
    } a,b,c;
    a.noOfpage = 100;
    a.price = 411.5;
    strcpy(a.name,"secret seven");

    printf("%d\n",a.noOfpage);
     printf("%f\n",a.price);
      printf("%s\n",a.name);
      return 0;
}